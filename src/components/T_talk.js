/* eslint-disable */
import React, {useState } from 'react';
import useStore from '../store';
import questions from '../questions';
import axios from 'axios';
import profile from '../images/profile.png';

function T_talk() { 
  const { selectedQuestions } = useStore();
  
    const [job, setJob] = useState('');
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const API_KEY = process.env.REACT_APP_OPENAI_KEY;
      const MODEL_ID = process.env.REACT_APP_MODEL_ID;


      if (!API_KEY) {
        console.error('OpenAI API Key is missing');
        return;
      }
  
      if (!MODEL_ID) {
        console.error('model ID is missing');
        return;
      }
  
      try {
        setLoading(true);
        const res = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: MODEL_ID,
          messages: [
            {
              role: "system",
              content: `당신은 당신의 직업에 관련된 초등학생의 질문에 친절하고 정확하게 답변해주는 전문가입니다.
                        당신의 직업은 ${job}입니다. 초등학생 4학년 학생에게 답변한다고 가정하고 친절하게 답변하세요.답변의 분량은 두 문장을 넘지 않습니다.
                        모든 답변은 한국어로 답하세요.
                        이모지를 넣어 친절하게 답하세요.
                        
                        슈퍼맨, 아이언맨과 같은 가상의 인물이나 팬더, 선인장 같은 동식물, 트럼프, 푸틴과 같이 인물의 이름 등 직업이 아닌 것에 대한 질문을 하는 경우 "죄송합니다. ㅇㅇ은 직업이 아닙니다."라는 응답을 출력하세요.
                        직업과 거리가 멀거나 무관한 질문을 하는 경우는 "죄송합니다. 저는 관련된 질문에만 답변할 수 있습니다."라는 응답을 출력하세요.
                        욕설이나 성적이거나 모욕적인 표현이 들어가 있는 경우 "부적절한 표현이 감지되었습니다"라는 응답을 출력하세요.
                        `
            },
            {
              role: "user",
              content: question
            }
          ]
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          }
        });
  
        setResponse(res.data.choices[0].message.content);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError('Error: ' + error.response?.data?.error?.message || error.message);
      }
    };

  return (
  <div>
    <div className='mb-4'>
      <form onSubmit={handleSubmit}>
          <div className='flex justify-center'>
              <label>
                  <input
                      type="text"
                      className='p-2 border border-sky-300 bg-sky-100 rounded-2xl text-center placeholder-sky-300'
                      value={job}
                      placeholder="직업을 입력하세요"
                      onChange={(e) => setJob(e.target.value)}
                      required
                  />
              </label>
          </div>
          <div className='w-full my-4'>
            {error && <p className="error">{error}</p>}
            <p className='text-xs py-2 text-yellow-500'>살밍이의 답변</p>
              <div className='flex gap-2'>
                <img src={profile} className='w-8 h-8'></img>
                <div className='w-full'>
                  <div className='p-4 rounded-2xl bg-yellow-50 border border-yellow-400 w-[80%] min-h-[100px]'>
                    {loading && <p className='text-yellow-700'>답변 중이에요...</p>}
                  {!loading && response && (
                      <>
                          <p>{response}</p>
                        </>
                      
                  )}  
                </div>
              </div>
            </div>
            <p className='text-right text-xs py-2'>여행자의 질문</p>
            <div className='w-full flex justify-end '>
              <input
                  type="text"
                  className='w-[80%] rounded-2xl border border-gray-300 bg-gray-100 p-2 text-right'
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
              />
            </div>
          </div>
          <div className='flex justify-end'>
          <button 
            className={`w-[100px] p-2 ${ loading? "bg-gray-400": "bg-primary"} text-white rounded-2xl hover:scale-105 duration-100 transition`}
            type="submit" disabled={loading}>
              {loading ? '기다리는 중' : '전송'}
          </button>
          </div>
      </form>
      

    </div>
    <hr className='my-4'/>
    <p className='text-xs text-primary text-center'>아래 질문 목록을 눌러 답을 찾아보세요!</p>
    <div className='w-full gap-1 grid grid-cols-3'>
      {
      questions.map((question) => {
        if (!selectedQuestions[question.no]) return null;
        return (
          <div 
          key={question.no} 
          num={question.no} 
          className="p-2 px-4 my-2 rounded-2xl text-md bg-violet-100 text-violet-500  hover-zoom"
          onClick={() => setQuestion(question.question)}
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
