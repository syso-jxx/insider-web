interface InputProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='w-full rounded-md border-[1px] p-4 focus:outline-none focus:ring-[1px] focus:ring-primary'
    />
  );
}
