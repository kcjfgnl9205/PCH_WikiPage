import { Title } from '@/components/common'

interface Props {
  title: string
  children: React.ReactNode
}

export default function Layout({ title, children }: Props) {
  return (
    <main className='p-2 lg:p-4'>
      <Title title={title} />
      <section className='flex flex-col gap-4'>{children}</section>
    </main>
  )
}
