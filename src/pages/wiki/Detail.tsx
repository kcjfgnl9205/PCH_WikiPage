import { Link, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import reactStringReplace from 'react-string-replace'
import { useLiveQuery } from 'dexie-react-hooks'

import routes from '@/routes'
import { BUTTON_COLOR, Wiki } from '@/types'
import { deleteItem, getAllItems, getItemById } from '@/apis/wiki'
import { Empty, Layout } from '@/components/layout'
import { Button, ButtonGroup } from '@/components/common'

export default function Detail() {
  const params = useParams()
  const navigate = useNavigate()
  const item = useLiveQuery(() => getItemById(Number(params.id)), [params.id])
  const items = useLiveQuery(() => getAllItems(), [params.id]) ?? []

  if (!item) {
    return (
      <Empty
        message='데이터가 존재하지 않습니다.'
        onClick={() => navigate(-1)}
      />
    )
  }

  const handleDelete = async (id?: number) => {
    if (id && confirm('삭제하시겠습니까?')) {
      await deleteItem(Number(params.id))
      toast.success('삭제했습니다.')
      navigate(routes.home)
    }
  }

  return (
    <>
      {item && (
        <Layout title={item.title}>
          <div className='whitespace-pre-line'>
            {changeLink(item.content, items)}
          </div>
          <ButtonGroup>
            <Button label='수정' onClick={() => navigate(`/${item.id}/edit`)} />
            <Button
              label='삭제'
              onClick={() => handleDelete(item.id)}
              color={BUTTON_COLOR.ERROR}
            />
          </ButtonGroup>
        </Layout>
      )}
    </>
  )
}

// 위키페이지 본문에 다른 위키페이지의 제목이 있으면 링크 추가
const changeLink = (content: string, wikis: Wiki[]) => {
  return reactStringReplace(content, /([\w가-힣ㄱ-ㅎㅏ-ㅣ]+)/g, (match, i) => {
    const matchingWiki = wikis.find((wiki) => wiki.title === match)
    if (matchingWiki) {
      return (
        <Link
          key={i}
          to={`/${matchingWiki.id}`}
          className='text-blue-500 underline'
        >
          {match}
        </Link>
      )
    }

    return <span key={i}>{match}</span>
  })
}
