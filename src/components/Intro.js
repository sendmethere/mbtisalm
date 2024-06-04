// scene : 2
import React, {useState, useEffect} from 'react';
import Salming from '../images/salming.png';

import useStore from '../store';


function Intro() {
  const { pass, setPass, scenesDone, setScenesDone } = useStore();
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
  }, [scenesDone]);

  const handleNext = () => {
    if (currentSentence < sentences.length - 1) {
      setCurrentSentence(currentSentence + 1);
    }
  }

  const sentences = [
    "삶을 가꾸는 여정을 떠나볼까요? 진행하려면 다음 버튼을 누르세요",
    "메시지2",
    "메시지3",
  ]
  
return (
  <div className='flex w-full'>
    <img src={Salming} alt="Salming" />
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
