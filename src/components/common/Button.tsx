import { BUTTON_COLOR } from '@/types'

interface Props {
  type?: 'button' | 'submit'
  label: string
  onClick: () => void
  color?: BUTTON_COLOR
  outline?: boolean
}

export default function Button({
  type = 'button',
  label,
  onClick,
  color = BUTTON_COLOR.PRIMARY,
  outline,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-4
        py-2
        border-[1px]
        rounded-lg
        text-sm
        ${color === BUTTON_COLOR.PRIMARY && (outline ? 'border-blue-500 text-blue-500 hover:bg-blue-100' : 'border-none bg-blue-500 text-white')}
        ${color === BUTTON_COLOR.ERROR && (outline ? 'border-rose-500 text-rose-500 hover:bg-rose-100' : 'border-none bg-rose-500 text-white')}
      `}
    >
      {label}
    </button>
  )
}
