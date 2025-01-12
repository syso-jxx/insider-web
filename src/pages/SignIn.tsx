import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/common/Input';
import Inner from '../components/layout/Inner';
import Button from '../components/common/Button';
import GoogleLogoIcon from '../assets/GoogleLogoIcon';
import KakaoLogoIcon from '../assets/KakaoLogoIcon';
import NaverLogoIcon from '../assets/NaverLogoIcon';

export default function SignIn() {
  const [input, setInput] = useState({ id: '', password: '' });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Inner className='lg:w-1/3'>
      <div className='mb-20 mt-12 text-center text-4xl font-bold lg:mt-16'>
        로그인
      </div>

      <section>
        <div className='flex flex-col gap-4'>
          <Input
            name='id'
            value={input.id}
            placeholder='아이디를 입력해주세요.'
            onChange={handleChangeInput}
          />
          <Input
            name='password'
            value={input.password}
            placeholder='비밀번호를 입력해주세요.'
            onChange={handleChangeInput}
          />

          <div className='flex gap-2'>
            <input type='checkbox' id='save-id' />
            <label
              htmlFor='save-id'
              className='cursor-pointer font-medium text-gray-500'
            >
              아이디 저장
            </label>
          </div>

          <Button
            onClick={() => console.log('singIn!!!')}
            large
            rounded
            className='mt-8 lg:mt-14'
          >
            로그인
          </Button>
        </div>

        <div className='mt-8 flex items-center justify-around text-base text-gray-500 lg:mt-10 lg:text-xl'>
          <Link to='/' className='border-b-[1px] border-gray-500'>
            아이디 찾기
          </Link>
          <Link to='/' className='border-b-[1px] border-gray-500'>
            비밀번호 찾기
          </Link>
          <Link to='/' className='border-b-[1px] border-gray-500'>
            회원가입
          </Link>
        </div>

        <div className='my-24 flex flex-col items-center lg:my-32'>
          <div className='flex w-full items-center'>
            <hr className='flex-grow border-t border-gray-500' />
            <span className='mx-4 text-lg text-gray-600 lg:text-xl'>
              또는 다음으로 로그인
            </span>
            <hr className='flex-grow border-t border-gray-500' />
          </div>

          <div className='mt-8 flex w-2/3 justify-around lg:mt-10'>
            <div className='flex flex-col items-center'>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-gray-300'>
                <GoogleLogoIcon />
              </div>
              <span className='mt-4 text-sm text-gray-600'>구글</span>
            </div>

            <div className='flex flex-col items-center'>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-gray-300'>
                <NaverLogoIcon />
              </div>
              <span className='mt-4 text-sm text-gray-600'>네이버</span>
            </div>

            <div className='flex flex-col items-center'>
              <div className='flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-gray-300'>
                <KakaoLogoIcon />
              </div>
              <span className='mt-4 text-sm text-gray-600'>카카오</span>
            </div>
          </div>
        </div>
      </section>
    </Inner>
  );
}
