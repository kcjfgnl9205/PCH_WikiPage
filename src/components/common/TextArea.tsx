interface Props {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  label?: string
  placeholder?: string
  rows?: number
}

export default function TextArea({
  name,
  value,
  onChange,
  label,
  placeholder,
  rows = 12,
}: Props) {
  return (
    <div className='flex flex-col gap-2'>
      {label && <label className='text-sm'>{label}</label>}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full border-[1px] rounded-lg px-2 resize-none'
        rows={rows}
      />
    </div>
  )
}
