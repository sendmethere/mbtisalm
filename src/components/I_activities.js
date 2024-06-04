// scene : 9
import React, { useEffect } from 'react';
import useStore from '../store';

function I_activities() {
  const { pass, setPass, sceneIndex, setSceneIndex, activityCompleted, setActivityCompleted, scenesDone, setScenesDone } = useStore();

  const handleJoinActivity = (event) => {
    const target = event.currentTarget;
    const sceneTo = parseInt(target.getAttribute('sceneTo'));
    const activity = parseInt(target.getAttribute('activity'));
    setSceneIndex(sceneTo);
    setActivityCompleted(activity);
  }

  useEffect(() => {
    if (activityCompleted[1] === true && activityCompleted[2] === true && activityCompleted[3] === true) {
      setScenesDone(8);
    }
  }, [activityCompleted]);

  useEffect(() => {
    if (scenesDone[8] === true) {
      setPass(true);
    }
  }, [scenesDone]);

  return (
    <div className='flex'>
      <div className='grow bg-red-50 text-red-200 hover-zoom hover-light p-4 rounded-2xl m-1 text-center pointer-events-auto'
        activity='1'
          sceneTo='9'
          onClick={handleJoinActivity}
          >
        <p className='font-bold'>활동 1</p>
        <p className='font-bold text-xl'>꿈계단 세우기</p>
        <p className='mt-4'>
          {
            activityCompleted[1] === true ? 
            <span className='text-xs bg-red-200 text-red-50 p-2 rounded-full'>완료</span> 
            : 
            <span className='text-xs border border-red-200 p-2 rounded-full'>미완료</span>
          }
          </p>
      </div>
      <div className='grow bg-yellow-50 text-yellow-200 hover-zoom hover-light p-4 rounded-2xl m-1 text-center pointer-events-auto'
        activity='2'
          sceneTo='10'
          onClick={handleJoinActivity}>
        <p className='font-bold'>활동 2</p>
        <p className='font-bold text-xl'>미래 일기 쓰기</p>
        <p className='mt-4'>
          {
            activityCompleted[2] === true ? 
            <span className='text-xs bg-yellow-200 text-yellow-50 p-2 rounded-full'>완료</span> 
            : 
            <span className='text-xs border border-yellow-200 p-2 rounded-full'>미완료</span>
          }
          </p>
      </div>
      <div className='grow bg-green-50 text-green-200 hover-zoom hover-light p-4 rounded-2xl m-1 text-center pointer-events-auto'
          activity='3'
          sceneTo='11'
          onClick={handleJoinActivity}
          >
        <p className='font-bold'>활동 3</p>
        <p className='font-bold text-xl'>미래 명함 만들기</p>
        <p className='mt-4'>
          {
            activityCompleted[3] === true ? 
            <span className='text-xs bg-green-200 text-green-50 p-2 rounded-full'>완료</span> 
            : 
            <span className='text-xs border border-green-200 p-2 rounded-full'>미완료</span>
          }
          </p>
      </div>
    </div>
  )};

export default I_activities;
