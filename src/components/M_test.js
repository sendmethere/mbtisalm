import React, {useState, useEffect} from 'react';
import MBTI_INFO from '../mbti_info';
import useStore from '../store';


const questions = [
  { no: 1, related: 'scoreEI', text: "나는 친구들과 함께 있을 때 더 에너지가 생겨요", answer1: "맞아요", answer2: "아니에요" },
  { no: 2, related: 'scoreSN', text: "나는 사실에 근거한 정보를 더 좋아해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 3, related: 'scoreJP', text: "나는 계획적으로 일하는 것을 좋아해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 4, related: 'scoreTF', text: "나는 논리적이고 분석적으로 생각해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 5, related: 'scoreEI', text: "나는 혼자 있는 시간도 즐겨요", answer1: "맞아요", answer2: "아니에요" },
  { no: 6, related: 'scoreSN', text: "나는 상상력을 발휘하는 것을 좋아해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 7, related: 'scoreJP', text: "나는 상황에 따라 유연하게 대처해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 8, related: 'scoreTF', text: "나는 사람들의 감정에 민감해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 9, related: 'scoreEI', text: "나는 새로운 사람들을 만나는 것을 좋아해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 10, related: 'scoreSN', text: "나는 현재 상황에 집중하는 편이에요", answer1: "맞아요", answer2: "아니에요" },
  { no: 11, related: 'scoreJP', text: "나는 미리 계획을 세우는 것을 좋아해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 12, related: 'scoreTF', text: "나는 결정을 내릴 때 논리를 중요하게 생각해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 13, related: 'scoreEI', text: "나는 큰 그룹보다 소규모 모임을 더 선호해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 14, related: 'scoreSN', text: "나는 미래를 예측하고 계획하는 것을 좋아해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 15, related: 'scoreJP', text: "나는 정리정돈이 잘 되어 있어야 일할 수 있어요", answer1: "맞아요", answer2: "아니에요" },
  { no: 16, related: 'scoreTF', text: "나는 감정보다는 사실에 더 중점을 둬요", answer1: "맞아요", answer2: "아니에요" },
  { no: 17, related: 'scoreEI', text: "나는 에너지를 얻기 위해 다른 사람들과 함께 시간을 보내요", answer1: "맞아요", answer2: "아니에요" },
  { no: 18, related: 'scoreSN', text: "나는 세부 사항을 중요시 여겨요", answer1: "맞아요", answer2: "아니에요" },
  { no: 19, related: 'scoreJP', text: "나는 일을 끝까지 마무리 짓는 것이 중요해요", answer1: "맞아요", answer2: "아니에요" },
  { no: 20, related: 'scoreTF', text: "나는 사람들의 느낌보다는 논리를 따라 결정을 내립니다", answer1: "맞아요", answer2: "아니에요" },
];


const MBTITest = () => {
  const {setPass, setSelectedMBTI, scenesDone, setScenesDone} = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [results, setResults] = useState(null);

  const handleSelect = (related, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestionIndex]: { related, value },
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      calculateResults();
    }
  };

  const progress = (currentQuestionIndex / questions.length) * 100;

  const calculateResults = () => {
    let scoreEI = 0;
    let scoreSN = 0;
    let scoreTF = 0;
    let scoreJP = 0;

    Object.values(responses).forEach(({ related, value }) => {
      if (related === 'scoreEI') scoreEI += value;
      if (related === 'scoreSN') scoreSN += value;
      if (related === 'scoreTF') scoreTF += value;
      if (related === 'scoreJP') scoreJP += value;
    });

    const resultEI = scoreEI >= 0 ? 'E' : 'I';
    const resultSN = scoreSN >= 0 ? 'S' : 'N';
    const resultTF = scoreTF >= 0 ? 'T' : 'F';
    const resultJP = scoreJP >= 0 ? 'J' : 'P';

    const mbtiResult = `${resultEI}${resultSN}${resultTF}${resultJP}`;
    setResults(mbtiResult);
    setSelectedMBTI(mbtiResult);
    setScenesDone(9);
    setPass(true);
  };

  useEffect(() => {
    if (scenesDone[9] === true) {
      setPass(true);
    }
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-8">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-primary h-2.5 rounded-full duration-100 transition-all" style={{ width: `${progress}%` }}></div>
      </div>
      {results ? (
        <div className='text-center'>
          <h2 className="text-xl mb-4">나의 성격유형은...</h2>
          <p className='text-4xl font-black text-primary mb-4'>{results}</p>
          <p className='text-primary font-bold mb-4'>{MBTI_INFO[results].type}</p>
          <div className='bg-primaryLight p-4 rounded-2xl'>
            <p className='text-gray-600'>{MBTI_INFO[results].content}</p>
          </div>
      </div>
      ) : (
        <div>
          
          <h2 className="text-xl text-center text-primary my-8">{currentQuestion.text}</h2>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => handleSelect(currentQuestion.related, 1)} 
              className="px-4 py-2 text-xl bg-gray-200 rounded-full hover:bg-primary hover:text-white">
              {currentQuestion.answer1}
            </button>
            <button 
              onClick={() => handleSelect(currentQuestion.related, -1)} 
              className="px-4 py-2 text-xl  bg-gray-200 rounded-full hover:bg-primary hover:text-white">
              {currentQuestion.answer2}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MBTITest;