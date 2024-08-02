// scene : 12
// 명함만들기 : 이름, 사진(1x1), 직업, 
import React, {useRef, useState, useCallback} from 'react';
import useStore from '../store';
import html2canvas from 'html2canvas';
import Webcam from 'react-webcam';

const I_activity3 = () => {

  const {nickname, selectedJob} = useStore();
  const outputRef = useRef(null);
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState('https://via.placeholder.com/100');
  const [countdown, setCountdown] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);



  const handleSaveAsImage = () => {
    html2canvas(outputRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'card.png';
      link.click();
    });
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);

  const startTimer = (duration) => {
    setCountdown(duration);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          capture();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };


  return (
  <div className=''>
    <div className='flex justify-center'>
      <div ref={outputRef}  className='w-2/3 p-5 rounded-xl border border-gray-300'>
          <div className='flex justify-between mb-4'>
            <img 
              src={imageSrc} 
              alt='profile' 
              className='w-24 h-24 rounded object-cover' 
              style={{ width: '100px', height: '100px' }}
            />
          <div>S.A.L.M</div>
          </div>
          <p className='my-2'>
            <span className='mr-4'>미래의 {selectedJob}</span>
            <span className='text-xl font-bold'>{nickname}</span>
          </p>
          <p>
          <span className='mr-9'>H.P</span>
            <span className=''>010-xxxx-xxxx</span>
          </p>
          <p>
          <span className='mr-4'>e-mail</span>
            <span className=''>******@salming.com</span>
          </p>
      </div>
    </div>

    <div className='flex justify-center py-4 gap-4'>
        <button onClick={() => setCameraOn(!cameraOn)} className="capture-button rounded-full bg-primary text-white px-4 py-2">사진 촬영하기</button>
        <button onClick={handleSaveAsImage} className="save-button rounded-full bg-primary text-white px-4 py-2">
          그림으로 저장하기
        </button>
      </div>
      {cameraOn && (<>
      <hr/>
    <div className='flex justify-center items-center py-4'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
        mirrored={true}
      />
      <button onClick={() => startTimer(3)} className="capture-button rounded-full bg-gray-200 w-[80px] h-[80px] text-xl px-4 py-2 ml-4">
          { countdown > 0 ? countdown : "📸" }
      </button>
    </div>
    <p className='text-center p-2'>📸 버튼을 누른 뒤, 정면의 카메라를 바라보세요.</p>
    </>
    )}

  </div>
  );
}

export default I_activity3;
