import { Link } from 'react-router-dom'
import { Wiki } from '@/types'

interface Props {
  item: Wiki
}

export default function Card({ item }: Props) {
  return (
    <Link
      to={`/${item.id}`}
      className='font-semibold border-[1px] p-2 lg:p-4 rounded-lg'
      state={{ id: item.id }}
    >
      {item.title}
    </Link>
  )
}
