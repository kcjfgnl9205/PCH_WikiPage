interface Props {
  children: React.ReactNode
}

export default function ButtonGroup({ children }: Props) {
  return (
    <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>{children}</div>
  )
}
