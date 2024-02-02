import { useNavigate, useParams } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'

import { getItemById } from '@/apis/wiki'
import { Empty, Layout } from '@/components/layout'
import { WikiEdit } from '@/components/wiki'

export default function Edit() {
  const params = useParams()
  const navigate = useNavigate()
  const item = useLiveQuery(() => getItemById(Number(params.id)), [params.id])

  if (!item) {
    return (
      <Empty
        message='데이터가 존재하지 않습니다.'
        onClick={() => navigate(-1)}
      />
    )
  }

  return (
    <Layout title={`${item?.title} (수정)`}>
      <WikiEdit item={item} />
    </Layout>
  )
}
