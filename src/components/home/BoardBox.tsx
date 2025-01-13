import { ReactElement } from 'react';
import RightArrowIcon from '../../assets/RightArrowIcon';
import BoardPost from './BoardPost';

interface BoardBoxProps {
  icon: ReactElement;
  title: string;
}

export default function BoardBox({ icon, title }: BoardBoxProps) {
  const posts = [
    '형님들 퇴사사유 두개 중 조언 부탁드립니다.',
    '형님들 퇴사사유 두개 중 조언 부탁드립니다.',
    '형님들 퇴사사유 두개 중 조언 부탁드립니다.',
    '형님들 퇴사사유 두개 중 조언 부탁드립니다.',
    '형님들 퇴사사유 두개 중 조언 부탁드립니다.',
  ];

  return (
    <div className='rounded-xl border-2 border-gray-300 pt-4 lg:pb-1 lg:pt-6'>
      <div className='flex items-center justify-between px-4 pb-3 lg:px-6 lg:pb-4'>
        <div className='text-primary-ff4200 flex items-center gap-2 text-xl font-bold'>
          {icon}
          <span>{title}</span>
        </div>
        <div className='flex cursor-pointer items-center gap-2 text-gray-400'>
          <span>더보기</span>
          <RightArrowIcon />
        </div>
      </div>
      <div>
        {posts.map((post, index) => (
          <BoardPost
            key={index}
            content={post}
            isLast={index === posts.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
