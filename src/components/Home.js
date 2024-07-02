import React, { useState } from 'react';
import title from '../images/title.png';

import button_1 from '../images/button_1.png';
import button_2 from '../images/button_2.png';
import button_3 from '../images/button_3.png';

import useStore from '../store';

const Home = () => { 
  
  const { setSceneIndex, nickname, setNickname } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nicknameInput, setNicknameInput] = useState(nickname);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    setNickname(nicknameInput);
    closeModal();
  };

  return (

  <div className=''>
    <div className='flex justify-center items-center'>
      <img src={title} alt="title" className='h-[400px] rounded-xl my-4'></img>
    </div>
    <p className='text-primary py-4 text-center'>
      {nickname !== "" ? `환영합니다, ${nickname}님!` : '환영합니다!'}
    </p>
    <div className='flex justify-center gap-4'>
      <img src={button_1} alt="button_1" className='w-[130px] hover:scale-105 hover-light' onClick={()=>{setSceneIndex(1)}}></img>
      <img src={button_2} alt="button_2" className='w-[130px]  hover:scale-105  hover-light'></img>
      <img src={button_3} alt="button_3" className='w-[130px]  hover:scale-105 hover-light' onClick={openModal}></img>
    </div>
    {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded-xl p-8 z-10">
            <h2 className="text-lg font-bold mb-4 text-primary">당신의 닉네임을 입력하세요</h2>
            <input
              type="text"
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-center">
              <button onClick={handleSave} className="px-4 py-2 bg-primary text-white rounded">저장</button>
            </div>
          </div>
        </div>
      )}
  </div>
  )
};

export default Home;
