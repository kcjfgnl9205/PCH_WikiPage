import { Link as ReactLink, useNavigate } from 'react-router-dom'
import { Button } from '@/components/common'

interface Props {
  label: string
  href: string
  button?: boolean
}

export default function Link({ label, href, button }: Props) {
  const navigate = useNavigate()
  return (
    <>
      {button ? (
        <Button label={label} onClick={() => navigate(href)} />
      ) : (
        <ReactLink to={href} className='underline text-blue-500'>
          {label}
        </ReactLink>
      )}
    </>
  )
}
