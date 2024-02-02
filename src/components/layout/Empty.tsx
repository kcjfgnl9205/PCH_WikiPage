import { Button } from '@/components/common'

interface Props {
  message: string
  description?: string
  onClick?: () => void
}

export default function Empty({ message, description, onClick }: Props) {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-3xl lg:text-5xl text-neutral-800'>{message}</p>
        <p className='text-lg lg:text-xl text-neutral-500'>{description}</p>
        <div className='mt-12'>
          {onClick && <Button label='돌아가기' onClick={onClick} />}
        </div>
      </div>
    </div>
  )
}
