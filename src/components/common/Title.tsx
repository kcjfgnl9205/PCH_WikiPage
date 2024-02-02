interface Props {
  title: string
}

export default function Title({ title }: Props) {
  return <h2 className='text-xl font-semibold mb-4 mt-2'>{title}</h2>
}
