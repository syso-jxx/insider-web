import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

interface DiscussionTopicCardProps {
  category: string;
  title: string;
  description: string;
  link: string;
  backgroudColor: string;
}

export default function DiscussionTopicCard({
  category,
  title,
  description,
  link,
  backgroudColor,
}: DiscussionTopicCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`grid max-w-96 gap-6 rounded-2xl p-5 text-white lg:p-6 ${backgroudColor}`}
    >
      <div>{category}</div>
      <div className='line-clamp-2 font-semibold lg:text-xl'>{title}</div>
      <div className='line-clamp-2 text-xs lg:text-base'>{description}</div>
      <Button
        onClick={() => navigate(`${link}`)}
        backgroundColor='bg-white'
        textColor='text-primary'
        rounded
        className='mt-4'
      >
        토론 페이지로 이동하기
      </Button>
    </div>
  );
}
