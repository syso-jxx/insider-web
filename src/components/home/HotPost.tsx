export default function HotPost() {
  return (
    <div className='flex items-start justify-between gap-8 border-b-[1px] border-b-gray-300 pb-2'>
      <div className='text-primary-ff4200 text-lg font-bold'>1</div>
      <div className='grid flex-1 gap-2 lg:gap-3'>
        <div className='text-sm'>취업</div>
        <div className='truncate text-lg font-medium lg:text-xl'>
          본사의 갑작스런 해고 통보
        </div>
        <div className='flex gap-2 text-sm text-gray-400'>
          <span>9시간 전</span>
          <span>231</span>
          <span>90</span>
        </div>
      </div>
      <div>댓글 37</div>
    </div>
  );
}
