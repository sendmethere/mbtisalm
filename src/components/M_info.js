import React from 'react';

import profile from '../images/profile.png';

const M_info = () => (
  <div>
    <div className='flex gap-4'>
      <div>
        <img src={profile} alt="profile" className='w-24'></img>
      </div>
      <div className='p-4 w-full bg-yellow-50 rounded-2xl text-yellow-700'>
        <p>성격유형검사는 네 가지 다른 기준을 사용해서 사람들의 성격을 나눠요. 각 기준마다 두 가지 선택지가 있어요.</p>
        <p>그래서 네 가지 기준을 조합하면 총 16가지 성격 유형이 나오게 됩니다. 이제 그 네 가지 기준이 무엇인지 알아볼까요?</p>
      </div>
    </div>
    <hr className='my-4'/>
    <p className='text-xl font-black mt-4 text-center'>외향(E) vs. 내향(I):</p>
    <div className='flex mb-4'>
      <div className='w-1/2 bg-orange-50 hover-zoom rounded-2xl p-2 m-2'>
        <p className='text-lg font-bold'>외향(E)</p>
        <p>다른 사람들과 어울리는 걸 좋아해요. 여러 사람과 이야기하고 활동적인 걸 즐겨요.</p>
      </div>
      <div className='w-1/2 bg-orange-50 hover-zoom rounded-2xl p-2 m-2'>
        <p className='text-lg font-bold'>내향(I)</p>
        <p>혼자 있거나 조용한 곳에서 쉬는 걸 좋아해요. 자기만의 시간을 중요하게 생각해요.</p>
      </div>
    </div>
    <hr/>
    <p className='text-xl font-black mt-4 text-center'>감각(S) vs. 직관(N):</p>
    <div className='flex mb-4'>
      <div className='w-1/2 bg-green-50 hover-zoom rounded-2xl p-2 m-2'>
        <p className='text-lg font-bold'>감각(S)</p>
        <p>눈으로 보거나 손으로 만질 수 있는 실제 정보를 중요하게 생각해요. 지금 여기서 일어나는 일에 집중해요.</p>
      </div>
      <div className='w-1/2 bg-green-50  hover-zoom rounded-2xl p-2 m-2'>
        <p className='text-lg font-bold'>직관(N)</p>
        <p>상상하고 미래에 일어날 일을 생각하는 걸 좋아해요. 눈에 보이지 않는 가능성에 더 관심이 많아요.</p>
      </div>
    </div>
    <hr/>
    <p className='text-xl font-black mt-4 text-center'>사고(T) vs. 감정(F):</p>
    <div className='flex mb-4'>
      <div className='w-1/2 bg-purple-50 hover-zoom rounded-2xl p-2 m-2'>
        <p className='text-lg font-bold'>사고(T)</p>
        <p>논리적으로 생각하고 공정하게 판단하는 걸 중요하게 여겨요. 사실과 논리를 중시해요.</p>
      </div>
      <div className='w-1/2 bg-purple-50 hover-zoom rounded-2xl p-2 m-2'>
        <p className='text-lg font-bold'>감정(F)</p>
        <p>다른 사람의 감정과 관계를 중요하게 생각해요. 사람들과의 조화와 배려를 중시해요.</p>
      </div>
    </div>
    <hr/>
    <p className='text-xl font-black mt-4 text-center'>판단(J) vs. 인식(P):</p>
    <div className='flex mb-4'>
      <div className='w-1/2 bg-blue-50 hover-zoom rounded-2xl p-2 m-2'>
        <p className='text-lg font-bold'>판단(J)</p>
        <p>계획을 세우고 그 계획을 지키는 걸 좋아해요. 정리된 삶을 선호해요.</p>
      </div>
      <div className='w-1/2 bg-blue-50 hover-zoom rounded-2xl p-2 m-2'>
        <p className='text-lg font-bold'>인식(P)</p>
        <p>상황에 따라 유연하게 대처하는 걸 좋아해요. 즉흥적이고 변화에 잘 적응해요.</p>
      </div>
    </div>
    <p>이렇게 네 가지 기준에 따라 E와 I, S와 N, T와 F, J와 P를 조합하면 총 16가지 성격 유형이 나오는 거예요. 예를 들어, 외향적이고 감각적이며 사고적이고 판단적인 사람은 ESTJ가 되는 거죠.</p>
  </div>
);

export default M_info;
