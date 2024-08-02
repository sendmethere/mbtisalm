// scene : 11
import React, { useRef, useEffect } from 'react';
import note1 from '../images/note_1.png';
import note2 from '../images/note_2.png';
import note3 from '../images/note_3.png';

import html2canvas from 'html2canvas';
import useStore from '../store';

const I_activity2 = () => {

  const {diary, setDiary} = useStore();
  
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setDiary(e.target.value);
  };

  const outputRef = useRef(null);

  const handleSaveAsImage = () => {
    html2canvas(outputRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'diary.png';
      link.click();
    });
  };


  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto'; // 초기 높이를 자동으로 설정
    textarea.style.height = `${textarea.scrollHeight}px`; // 입력된 내용에 따라 높이를 조정
  }, [diary]); // diary 상태가 변경될 때마다 실행

  const topDivStyle = {
    backgroundImage: `url(${note1})`, 
    backgroundSize: 'contain',
    width: '100%',
    aspectRatio: 7.9,
  }
  const midDivStyle = {
    backgroundImage: `url(${note2})`, 
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat-y',
    width: '100%',
    aspectRatio: 7.9,
  }
  const botDivStyle = {
    backgroundImage: `url(${note3})`, 
    backgroundSize: 'contain',
    width: '100%',
    aspectRatio: 7.9,
  }

  return (
    <div>
      <div ref={outputRef} className='output w-full flex flex-col justify-center items-center'>
        <div style={topDivStyle}>

          </div>
        <div style={midDivStyle} className='px-10 flex justify-center'>
          <textarea 
            ref={textareaRef}
            className='bg-transparent w-full text-lg p-2 text-[#423030]' 
            placeholder='이곳에 내 미래의 일기를 써 보세요'
            value={diary}
            onChange={handleInputChange}
            style={
              {
                resize:'none',
                overflow:'hidden'
              }
            }

            />
        </div>
        <div style={botDivStyle}>
        </div>
      </div>
      <div className='flex justify-center py-4'>
        <button onClick={handleSaveAsImage} className="save-button rounded-full bg-primary text-white px-4 py-2">
          그림으로 저장하기
        </button>
      </div>
      
  </div>
  )
};

export default I_activity2;
