/* eslint-disable */
// scene : 2
import React, {useState, useEffect} from 'react';
import Salming from '../images/salming.png';

import useStore from '../store';

function Intro() {
  const { setPass, scenesDone, setScenesDone, nickname } = useStore();
  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    if (currentSentence === sentences.length - 1) {
      setScenesDone(2);
      setPass(true);
    }
  }, [currentSentence]);

  useEffect(() => {
    if (scenesDone[2] === true) {
      setPass(true);
    }
  }, []);

  const handleNext = () => {
    if (currentSentence < sentences.length - 1) {
      setCurrentSentence(currentSentence + 1);
    }
  }

  const sentences = [
    `${ nickname !== "" ? `${nickname}님 안녕하세요!`: ""} 우리 함께 삶을 가꾸는 여정을 떠나볼까요?`,
    "저는 살밍이라고 해요! 여러분과 함께 꿈을 찾는 여정을 떠날 셀파(sherpa)입니다!",
    "아래 가이드에서 SALM의 의미를 확인하세요. 확인했다면 다음 버튼을 누르세요.",
    "자 그럼 이제 출발해볼까요?!",
  ]
  
return (
  <div className='flex w-full'>
    <img className="w-1/3" src={Salming} alt="Salming" />
    <div className='w-full'>
      <div className='lightbox-yellow'>
        {sentences[currentSentence]}
      </div>
      <div className='flex justify-end'>{ currentSentence === sentences.length - 1 ? "" :  <button className="bg-primary text-white p-2 px-4 my-2 rounded-full hover-zoom hover-light" onClick={handleNext}>다음</button> }</div>
    </div>
  </div>
);
}

export default Intro;
