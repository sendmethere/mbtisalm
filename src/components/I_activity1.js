// scene : 10
// 꿈 계단 세우기 : 4개의 계단에 꿈을 이루기 위한 단계적인 계획을 적어보세요.
import React from 'react';
import useStore from '../store';

import salming_ready from '../images/salming_ready.png';
import salming_jump from '../images/salming_jump.png';

const I_activity1 = () => {

  const {steps, setSteps, stepFilled} = useStore();

  return (
    <div className=''>
      <div className='text-center my-10'>꿈을 향한 계획을 1단계부터 구체적으로 적어보세요!</div>
      <div className='w-full grid grid-cols-10 gap-x-4 gap-y-0'>
      <div className='col-span-4 flex h-[100px]'></div><div className='col-span-6 flex'>
      {stepFilled() === 4 ? <img src={salming_jump} className="w-[100px]" alt=''/>:""}
      </div>
        <div className='col-span-4 flex justify-end items-end h-20'>
          {stepFilled() === 3 ? <img src={salming_ready} className="w-[90px]" alt=''/>:""}
          </div>
          <div className='col-span-6 bg-green-50 p-2'>
          <textarea
            className='w-full h-20 p-2 bg-transparent border border-[#0000001b] rounded-xl'
            value={steps[3]}
            onChange={(e) => setSteps(3, e.target.value)}
            placeholder='계단 4'
          />
        </div>  
        <div className='col-span-3 flex justify-end items-end h-20'>
          {stepFilled() === 2 ? <img src={salming_ready} className="w-[80px]" alt=''/>:""}
        </div>
        <div className='col-span-7 bg-yellow-50 p-2'>

        <textarea
            className='w-full h-20 p-2 bg-transparent border border-[#0000001b] rounded-xl'
            value={steps[2]}
            onChange={(e) => setSteps(2, e.target.value)}
            placeholder='계단 3'
          />
        </div>
        <div className='col-span-2 flex justify-end items-end h-20'>
          {stepFilled() === 1 ? <img src={salming_ready} className="w-[70px]" alt=''/>:""}
          </div>
          <div className='col-span-8 bg-orange-50 p-2'>
        <textarea
            className='w-full h-20 p-2 bg-transparent border border-[#0000001b] rounded-xl'
            value={steps[1]}
            onChange={(e) => setSteps(1, e.target.value)}
            placeholder='계단 2'
          />
        </div>
        <div className='col-span-1 flex justify-end items-end h-20'>
          {stepFilled() === 0 ? <img src={salming_ready} className="w-[60px]" alt=''/>:""}
        </div>
        <div className='col-span-9 bg-red-50 p-1'>
        <textarea
            className='w-full h-20 p-2 bg-transparent border border-[#0000001b] rounded-xl'
            value={steps[0]}
            onChange={(e) => setSteps(0, e.target.value)}
            placeholder='계단 1'
          />
        </div>
      </div>
    </div>
  )
};

export default I_activity1;
