import DiscussionTopicCard from '../components/home/DiscussionTopicCard';
import HotPost from '../components/home/HotPost';
import Inner from '../components/layout/Inner';

export default function Home() {
  return (
    <div>
      <Inner className='flex flex-col gap-10'>
        <section>
          <div className='mb-6 flex flex-col gap-4 lg:mb-8'>
            <div className='font-bold lg:text-2xl'>이번주 토론 주제 </div>
            <div className='hidden font-medium lg:block lg:text-lg'>
              이번주 토론 주제에 투표 참여해주세요! 금주 투표 결과에 따라 다음주
              주제 선정에 반영됩니다.
            </div>
          </div>
          <div className='grid grid-cols-1 place-items-center gap-4 lg:grid-cols-3'>
            <DiscussionTopicCard
              category='법률'
              title='저조한 출산율 문제에 어떤 정책과 근본적인 문제는 무엇일까?'
              description='‘현재 시행되고 있는 고등학교 및 중학교 교복제를 지속적으로 시행해야한다’에 대한 찬반..'
              link='/'
              backgroudColor='bg-primary'
            />
            <DiscussionTopicCard
              category='법률'
              title='저조한 출산율 문제에 어떤 정책과 근본적인 문제는 무엇일까?'
              description='‘현재 시행되고 있는 고등학교 및 중학교 교복제를 지속적으로 시행해야한다’에 대한 찬반..'
              link='/'
              backgroudColor='bg-primary'
            />
            <DiscussionTopicCard
              category='법률'
              title='저조한 출산율 문제에 어떤 정책과 근본적인 문제는 무엇일까?'
              description='‘현재 시행되고 있는 고등학교 및 중학교 교복제를 지속적으로 시행해야한다’에 대한 찬반..'
              link='/'
              backgroudColor='bg-primary'
            />
          </div>
        </section>

        <section>
          <div className='mb-6 font-bold lg:mb-8 lg:text-2xl'>
            인사이더 랭킹
          </div>
          <div className='gird grid-cols-2'>
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
          <div className='mb-6 font-bold lg:mb-8 lg:text-2xl'>토론 게시판</div>
        </section>

        <section>
          <div className='mb-6 font-bold lg:mb-8 lg:text-2xl'>힐링 추천</div>
        </section>
      </Inner>
    </div>
  );
}
