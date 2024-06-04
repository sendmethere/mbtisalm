import React from 'react';
import useStore from '../store';
import questions from '../questions';

function T_talk() { 
  const { pass, setPass, scenesDone, setScenesDone, selectedQuestions } = useStore();
  
  return (
  <div>
    <div>
      이곳에 대화창이 들어갑니다.
    </div>
    <p>대화를 통해 선택한 질문의 답을 찾아보세요.</p>
    <div className='w-full gap-1 grid grid-cols-3'>
      {
      questions.map((question) => {
        if (!selectedQuestions[question.no]) return null;
        return (
          <div 
          key={question.no} 
          num={question.no} 
          className="p-2 px-4 my-2 rounded-2xl text-xs bg-violet-100 hover-zoom"
          >
            {question.question}
          </div>
        )
      })
    }
    </div>
  </div>
)};

export default T_talk;
