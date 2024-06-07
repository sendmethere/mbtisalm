import React, {useState , useEffect} from 'react';
import useStore from '../store';
import questions from '../questions';
import axios from 'axios';

function T_talk() { 
  const { pass, setPass, scenesDone, setScenesDone, selectedQuestions } = useStore();
  
    const [job, setJob] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setAnswer('');
        

        try {
            const response = await axios.post('https://w3jpmgayh4.execute-api.us-east-2.amazonaws.com/ChatSALM', {
                job,
                question,
            });

            setAnswer(response.data.answer);
        } catch (err) {
            setError('An error occurred while fetching the answer. Please try again.');
        } finally {
            setLoading(false);
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
                {answer && (
                    <div>
                        <h2>Answer:</h2>
                        <p>{answer}</p>
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
