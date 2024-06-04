import React from 'react';



function M_types() { 
  const MBTI_TYPES = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];
  return (
    <div>
      <div className='flex flex-wrap grid grid-cols-4'>
        {MBTI_TYPES.map((type, index) => (
          <div key={index} className='grow bg-blue-50 text-blue-200 hover-zoom hover-light px-4 py-8 rounded-2xl m-1 text-center'>
            <p className='font-bold'>{type}</p>
          </div>
        ))}
      </div>
    </div>
)};

export default M_types;
