interface BoardPostProps {
  content: string;
  isLast: boolean;
}

export default function BoardPost({ content, isLast }: BoardPostProps) {
  return (
    <div
      className={`flex cursor-pointer justify-between gap-6 px-4 py-3 lg:px-6 lg:py-4 ${
        isLast ? '' : 'border-b-2 border-gray-300'
      }`}
    >
      <span className='truncate'>{content}</span>
      <div className='flex gap-2'>
        <span>86</span>
        <span>86</span>
      </div>
    </div>
  );
}
