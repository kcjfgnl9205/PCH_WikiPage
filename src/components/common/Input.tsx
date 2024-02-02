interface Props {
  type?: 'text'
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  placeholder?: string
}

export default function Input({
  type = 'text',
  name,
  value,
  onChange,
  label,
  placeholder,
}: Props) {
  return (
    <div className='flex flex-col gap-2'>
      {label && <label className='text-sm'>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full h-[40px] border-[1px] rounded-lg px-2'
      />
    </div>
  )
}
