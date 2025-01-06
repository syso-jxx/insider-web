import LogoIcon from '../../assets/LogoIcon';

export default function Header() {
  return (
    <header className='shadow-md'>
      <div className='mx-auto w-11/12 md:py-1'>
        {/* md 미만 */}
        <div className='flex items-center justify-between text-xs md:hidden'>
          <div className='flex-1'>메뉴</div>

          <div className='flex flex-1 justify-center'>
            <LogoIcon width={120} height={60} />
          </div>

          <div className='flex flex-1 justify-end'>
            <button className='mr-2'>로그인</button>
            <button>회원가입</button>
          </div>
        </div>

        {/* md 이상 */}
        <div className='hidden items-center justify-between text-sm md:flex'>
          <div className='flex flex-1 items-center gap-9'>
            <LogoIcon width={160} />
            <div className='hidden lg:block'>
              <span>토픽</span>
              <span>1. 인사이더</span>
            </div>
          </div>

          <div className='flex w-1/2 flex-1 justify-center'>
            <input
              type='text'
              placeholder='검색어를 입력하세요'
              className='w-full rounded-md border border-gray-300 px-3 py-1'
            />
          </div>

          <div className='flex flex-1 items-center justify-end gap-2'>
            <button>로그인</button>
            <button>회원가입</button>
          </div>
        </div>
      </div>
    </header>
  );
}
