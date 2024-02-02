import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { BUTTON_COLOR, Wiki } from '@/types'
import { addItem, updateItem } from '@/apis/wiki'
import { Button, ButtonGroup, Input, TextArea } from '@/components/common'

interface Props {
  item?: Wiki | null
}

const initValue: Wiki = {
  title: '',
  content: '',
}

export default function Edit({ item }: Props) {
  const navigate = useNavigate()
  const [value, setValue] = useState(item ? item : initValue)

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setValue((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async () => {
    if (!value.title || !value.content) {
      toast.error('제목, 내용을 입력해주세요.')
      return
    }

    const response = item
      ? await updateItem(value.id!, value)
      : await addItem(value)
    if (response) {
      toast.success(item ? '수정했습니다.' : '등록했습니다.')
      navigate(item ? `/${item.id}` : `/${response}`, { replace: true })
    }
  }

  const handleCancel = () => {
    if (confirm('입력중인 내용은 저장되지 않습니다.')) {
      setValue(initValue)
      navigate(-1)
    }
  }

  const submitButtonName = useMemo(() => {
    if (item) {
      return '수정'
    }

    return '등록'
  }, [item])

  return (
    <div className='flex flex-col gap-4'>
      <Input
        name='title'
        label='제목'
        value={value.title}
        onChange={handleOnChange}
      />
      <TextArea
        name='content'
        label='본문'
        value={value.content}
        onChange={handleOnChange}
      />
      <ButtonGroup>
        <Button label={submitButtonName} onClick={handleSubmit} />
        <Button
          label='취소'
          onClick={handleCancel}
          color={BUTTON_COLOR.ERROR}
        />
      </ButtonGroup>
    </div>
  )
}
