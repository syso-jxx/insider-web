import { Link } from 'react-router-dom';
import LogoIcon from '../../assets/LogoIcon';

export default function Header() {
  return (
    <header className='shadow-md'>
      <div className='mx-auto w-11/12 lg:py-1'>
        {/* lg(1024px) 미만 */}
        <div className='flex items-center justify-between text-xs lg:hidden'>
          <div className='flex-1'>메뉴</div>

          <Link to='/' className='flex flex-1 justify-center'>
            <LogoIcon width={120} height={60} />
          </Link>

          <div className='flex flex-1 items-center justify-end gap-2'>
            <Link to='signin'>로그인</Link>
            <Link to='signup'>회원가입</Link>
          </div>
        </div>

        {/* lg(1024px) 이상 */}
        <div className='hidden items-center justify-between text-sm lg:flex'>
          <div className='flex flex-1 items-center gap-9'>
            <Link to='/'>
              <LogoIcon width={160} />
            </Link>
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

          <div className='flex flex-1 items-center justify-end gap-4'>
            <Link to='signin'>로그인</Link>
            <Link to='signup'>회원가입</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
