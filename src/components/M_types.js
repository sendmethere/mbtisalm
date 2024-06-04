import React, {useState} from 'react';
import MBTI_INFO from '../mbit_info';


function M_types() { 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const MBTI_TYPES = ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'];

  const openModal = (type) => {
    setSelectedType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedType(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <div className='flex flex-wrap grid grid-cols-4'>
        {MBTI_TYPES.map((type, index) => (
          <div key={index} className='grow bg-blue-50 text-blue-200 hover-zoom hover-light px-4 py-8 rounded-2xl m-1 text-center'
          onClick={() => openModal(type)}>
            <p className='text-xl font-bold'>{type}</p>
            <p className='mt-4 text-xs'>
              {MBTI_INFO[type].type}
            </p>
          </div>
        ))}
      </div>
      {isOpen && selectedType && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
        onClick={handleBackgroundClick}>
          <div className='bg-white max-w-[768px] mx-2 p-8 rounded-2xl relative'>
            <button onClick={closeModal} className='absolute top-2 right-2 text-black'>
              &times;
            </button>
            <h2 className='text-xl font-bold mb-4'>{selectedType}</h2>
            <p className='mb-2 font-semibold'>{MBTI_INFO[selectedType].type}</p>
            <p>{MBTI_INFO[selectedType].content}</p>
          </div>
        </div>
      )}
    </div>
)};

export default M_types;
