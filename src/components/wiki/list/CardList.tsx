import { Wiki } from '@/types'
import Card from '@/components/wiki/list/Card'

interface Props {
  items: Wiki[]
}

export default function CardList({ items }: Props) {
  return (
    <div className='flex flex-col gap-2 lg:gap-4'>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
