interface ButtonProps {
  children: React.ReactNode;
  textColor?: string;
  backgroundColor?: string;
  large?: boolean;
  rounded?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export default function Button({
  children,
  textColor = 'text-white',
  backgroundColor = 'bg-primary-ff4200',
  rounded = false,
  large = false,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full truncate px-2 font-bold ${backgroundColor} ${textColor} ${large ? 'py-4 text-xl lg:py-5 lg:text-2xl' : 'py-2 text-sm lg:text-base'} ${rounded ? 'rounded-5xl' : 'rounded-md'} ${className}`}
    >
      {children}
    </button>
  );
}
