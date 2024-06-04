// scene : 13
import React from 'react';
import useStore from '../store';
import salming_outro from '../images/salming_outro.png';

function Outro() { 
  const { sceneIndex, setSceneIndex, pass, setPass, scenesDone, setScenesDone, nickname } = useStore();

  return (
  <div>
    <div className='flex justify-center'>
      <img className="w-1/2" src={salming_outro} alt="salming_outro" />
    </div>
    <div className='lightbox-blue mt-4'>
      <p>꿈을 찾기 위한 삶의 여정은 아직 끝이 아닙니다! 목적지는 바뀔 수도 있고, 더 재미난 일은 세상에 아직 많답니다!</p>
      <p>나의 꿈을 오늘로 가져오는 길은 계속 꿈꾸며, 노력하는 것입니다.</p>
      <p>그러니 꿈꾸기를 주저하지 말고 멋진 탐험을 이어나가세요!</p>
      <p>살밍이는 여러분의 여정을 응원할게요!</p>
      <p className=' text-right font-bold italic'>친애하는 탐험가 {nickname === "" ? "" : {nickname}}님께 살밍이 올림</p>
    </div>
    <div className='flex justify-center'>
      <button className="bg-primary text-white p-2 px-4 my-2 rounded-full hover-zoom hover-light" onClick={() => setSceneIndex(0)}>처음으로</button>
    </div>
  </div>
)};

export default Outro;
