import { useNavigate } from 'react-router-dom';

interface HotTopicCardProps {
  category: string;
  title: string;
  description: string;
  link: string;
  backgroudColor: string;
}

export default function HotTopicCard({
  category,
  title,
  description,
  link,
  backgroudColor,
}: HotTopicCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex max-h-72 max-w-96 flex-col gap-6 rounded-2xl p-5 text-white lg:p-6 ${backgroudColor}`}
    >
      <div>{category}</div>
      <div className='font-semibold lg:text-xl'>{title}</div>
      <div className='text-xs lg:text-base'>{description}</div>
      <button onClick={() => navigate(`${link}`)}>
        토론 페이지로 이동하기
      </button>
    </div>
  );
}
