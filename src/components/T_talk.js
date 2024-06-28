/* eslint-disable */
import React, {useState } from 'react';
import useStore from '../store';
import questions from '../questions';

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
        const res = await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          },
          body: JSON.stringify({
            model: MODEL_ID,
            prompt: `You are a professional who handles the given question related to the specified job.
                    Your job is ${job}. Answer the given single question at the level of a 4th-grade student, in one or two sentences. Answer in Korean.\n\n
                    ${question}`,
            temperature: 0.5,
            frequency_penalty: 0,
            presence_penalty: 0
          })
        });
  
        const data = await res.json();
        setResponse(data.choices[0]['text']);
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
  <div>
    <div>
      
      <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Job:
                            <input
                                type="text"
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Question:
                            <input
                                type="text"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'Asking...' : 'Ask'}
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
                {response && (
                    <div>
                        <h2>Answer:</h2>
                        <p>{response}</p>
                    </div>
                )}  

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
          className="p-2 px-4 my-2 rounded-2xl text-md bg-violet-100 text-violet-500  hover-zoom"
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
