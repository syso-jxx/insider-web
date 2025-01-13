interface InnerProps {
  children: React.ReactNode;
  className?: string;
}
export default function Inner({ children, className }: InnerProps) {
  return (
    <div className={`mx-auto w-4/5 py-8 lg:py-10 ${className}`}>{children}</div>
  );
}
