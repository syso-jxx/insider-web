import BagIcon from '../assets/BagIcon';
import BoardBox from '../components/home/BoardBox';
import DiscussionTopicCard from '../components/home/DiscussionTopicCard';
import HotPost from '../components/home/HotPost';
import Inner from '../components/layout/Inner';

export default function Home() {
  return (
    <Inner className='flex flex-col gap-10 lg:gap-16'>
      <section>
        <div className='mb-6 flex flex-col gap-4 lg:mb-8'>
          <div className='text-xl font-bold lg:text-2xl'>이번주 토론 주제</div>
          <div className='hidden font-medium lg:block lg:text-lg'>
            이번주 토론 주제에 투표 참여해주세요! 금주 투표 결과에 따라 다음주
            주제 선정에 반영됩니다.
          </div>
        </div>
        <div className='grid grid-cols-1 place-items-center gap-4 lg:grid-cols-3'>
          <DiscussionTopicCard
            category='법률'
            title='저조한 출산율 문제에 어떤 정책과 근본적인 문제는 무엇일까?'
            description='‘현재 시행되고 있는 고등학교 및 중학교 교복제를 지속적으로 시행해야한다’에 대한 찬반'
            link='/'
            backgroudColor='bg-primary-ff4200'
          />
          <DiscussionTopicCard
            category='법률'
            title='저조한 출산율 문제에 어떤 정책과 근본적인 문제는 무엇일까?'
            description='‘현재 시행되고 있는 고등학교 및 중학교 교복제를 지속적으로 시행해야한다’에 대한 찬반'
            link='/'
            backgroudColor='bg-primary-ff7e3d'
          />
          <DiscussionTopicCard
            category='법률'
            title='저조한 출산율 문제에 어떤 정책과 근본적인 문제는 무엇일까?'
            description='‘현재 시행되고 있는 고등학교 및 중학교 교복제를 지속적으로 시행해야한다’에 대한 찬반'
            link='/'
            backgroudColor='bg-primary-ffa375'
          />
        </div>
      </section>

      <section>
        <div className='mb-6 text-xl font-bold lg:mb-8 lg:text-2xl'>
          인사이더 랭킹
        </div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-x-16'>
          <HotPost />
          <HotPost />
          <HotPost />
          <HotPost />
          <HotPost />
          <HotPost />
          <HotPost />
          <HotPost />
          <HotPost />
          <HotPost />
        </div>
      </section>

      <section>
        <div className='mb-6 text-xl font-bold lg:mb-8 lg:text-2xl'>
          토론 게시판
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <BoardBox icon={<BagIcon />} title='취업' />
          <BoardBox icon={<BagIcon />} title='연애' />
          <BoardBox icon={<BagIcon />} title='경제' />
          <BoardBox icon={<BagIcon />} title='정치' />
          <BoardBox icon={<BagIcon />} title='스포츠' />
          <BoardBox icon={<BagIcon />} title='사회' />
          <BoardBox icon={<BagIcon />} title='익명자유' />
        </div>
      </section>

      <section>
        <div className='mb-6 text-xl font-bold lg:mb-8 lg:text-2xl'>
          힐링 추천
        </div>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <BoardBox icon={<BagIcon />} title='익명고민' />
          <BoardBox icon={<BagIcon />} title='반려동물' />
          <BoardBox icon={<BagIcon />} title='무한위로' />
          <BoardBox icon={<BagIcon />} title='응원합시다' />
        </div>
      </section>
    </Inner>
  );
}
