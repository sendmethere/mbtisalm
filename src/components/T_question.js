import React from 'react';
import useStore from '../store';
import questions from '../questions';


function T_question() { 
  const { pass, setPass, scenesDone, setScenesDone, selectedQuestions, setSelectedQuestions } = useStore();
  const handleSelectQuestion = (event) => {
    const num = parseInt(event.target.getAttribute('num'));
    setSelectedQuestions(num, !selectedQuestions[num] );
  }

  return (
  <div>
    <div className='flex justify-center'>
      <div className='flex flex-col'>
        {questions.map((question) => {
          if (question.no === 0) return null;
          return (
            <button key={question.no} num={question.no} 
            className={`${ selectedQuestions[question.no] ? 'bg-primary text-white' : 'bg-primaryLight text-violet-400 ' } p-2 px-4 my-2 rounded-2xl hover-zoom hover-light`}
            onClick={handleSelectQuestion}>{question.question}
            </button>
          )
        })}
      </div>
    </div>
  </div>
)};

export default T_question;
