import { Link } from 'react-router-dom'
import routes from '@/routes'

export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-3xl lg:text-5xl text-gray-800'>Page Not Found</p>
        <Link
          to={routes.home}
          className='flex items-center bg-blue-500 text-white px-4 py-2 mt-12 rounded text-sm'
        >
          <span>홈으로 돌아가기</span>
        </Link>
      </div>
    </div>
  )
}
