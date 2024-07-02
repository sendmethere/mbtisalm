import React from 'react';
import job_info from '../browse_info';
import useStore from '../store';

function B_Browse() {

  const { selectedJob, selectedMBTI, setSelectedJob } = useStore();

  const openPopup = (url) => {
    window.open(url, 'popup', 'width=600,height=400,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
  };

  const filtered_job_info = job_info.filter((job) => job.mbti === selectedMBTI);
  

  return (
    <div className="App">
      <div className='flex justify-center items-center'>
        
      </div>
      <div className='flex justify-between py-4 px-2'>
        <div className='text-center text-gray-600 my-2'>당신의 유형({selectedMBTI})에 추천하는 직업</div>
        <div className='bg-green-50 rounded-full p-2 px-4'>{ selectedJob !== "" ? `선택한 직업 : ${selectedJob}`: "" }</div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
      {filtered_job_info.map((job, index) => (
        <div 
          key={index}
          className={`relative bg-blue-50 text-blue-200 hover-zoom hover-light px-4 py-8 rounded-2xl m-1 text-center`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/job_image/${job.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          onClick={() => {setSelectedJob(job.job)}}
        >
          <div className={`absolute inset-0 bg-black ${selectedJob === job.job ? "border-green-100" : '' } opacity-80 border-4  rounded-xl`}></div>
          <div className="relative">
            <p className='text-xl font-bold text-white'>{job.job}</p>
            <p className='my-2 text-xs text-white'>{job.mbti}</p>
            <p><span className='text-xs bg-white rounded-full p-1 px-2 text-black opacity-50 hover:opacity-75' onClick={()=>{openPopup(job.href)}}>자세히 보기</span></p>
          </div>
        </div>
      ))}
      </div>
      <hr className='my-4'/>
      <p className='text-center text-gray-600 my-2'>다른 직업도 탐색해보세요!</p>
      <div className='grid grid-cols-4 gap-4'>
      {job_info.map((job, index) => (
        <div 
          key={index}
          className={`relative bg-blue-50 text-blue-200 hover-zoom hover-light px-4 py-8 rounded-xl m-1 text-center`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/job_image/${job.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          onClick={() => {
            setSelectedJob(job.job)
            }
          }
        >
          <div className={`absolute inset-0 bg-black ${job.mbti === selectedMBTI ? 'border-pink-400' : ''} ${selectedJob === job.job ? "border-green-500" : '' } opacity-80 border-4  rounded-xl`}></div>
          <div className="relative">
            <p className='text-xl font-bold text-white'>{job.job}</p>
            <p className='my-2 text-xs text-white'>{job.mbti}</p>
            <p><span className='text-xs bg-white rounded-full p-1 px-2 text-black opacity-50 hover:opacity-75' onClick={()=>{openPopup(job.href)}}>자세히 보기</span></p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default B_Browse;
