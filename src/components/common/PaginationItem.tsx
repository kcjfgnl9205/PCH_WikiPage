interface Props {
  n?: number
  selected?: boolean
  prev?: boolean
  next?: boolean
  onClick?: () => void
}

export default function PaginationItem({
  n,
  selected,
  onClick,
  prev,
  next,
}: Props) {
  return (
    <li
      onClick={onClick}
      className={`
        w-10
        h-10
        flex
        justify-center
        items-center
        cursor-pointer
        rounded-full
        ${selected && 'bg-blue-500 text-white'}
      `}
    >
      {prev && <span>&lt;</span>}
      {next && <span>&gt;</span>}
      {n}
    </li>
  )
}
