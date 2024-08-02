import React, { useEffect, useState } from 'react';
import left_arrow from './images/left_arrow.png';
import right_arrow from './images/right_arrow.png';

import useStore from './store';
import scenes from './scenes';

import Navi from './components/Navi';

function App() {

  const { sceneIndex, setSceneIndex, pass, setPass } = useStore();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(sceneIndex);
  const currentScene = scenes[currentSceneIndex];

  useEffect(() => {
    setCurrentSceneIndex(sceneIndex);
  }, [sceneIndex]);

  useEffect(() => {
    currentScene.passable ? setPass(true) : setPass(false);
  }, [currentScene, setPass]);

  const handleNext = () => {
    if (currentScene.nextScene !== null) {
      setSceneIndex(currentScene.nextScene - 1);
    }
  };

  const handlePrev = () => {
    if (currentScene.prevScene !== null) {
      setSceneIndex(currentScene.prevScene - 1);
    }
  };

  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-violet-100 py-20">
      <div className='flex flex-col justify-center md:w-[768px] w-full '>
        <p className="text-2xl text-center font-extrabold text-violet-400 mb-4">{currentScene.sceneTitle}</p>
        <div className='flex w-full justify-center'>
          <div className='md:flex hidden w-10 h-10 mt-[100px]'>
          {currentScene.prevScene !== null ? (
            <img
              className="hover-zoom hover-light"
              style={{ width: '40px' }}
              src={left_arrow}
              alt="left_arrow"
              onClick={handlePrev}
            />
          ) : (
            <div style={{ width: '40px' }}></div>
          )}
          </div>
          <div className='w-full'>
            <div className='m-box m-4 p-4'>
            <currentScene.sceneComponent />
            <Navi />
            </div>
            
            {currentScene.sceneGuideTitle !== '' && (
              <div className='m-box m-4 p-4'>
              <p className='text-violet-500 text-lg font-bold'>
                {currentScene.sceneGuideTitle}
              </p>
              <p className='text-violet-400 text-sm'>
                {currentScene.sceneGuideContent}
              </p>
              </div>
            )}

          </div>
          <div className='md:flex hidden w-10 h-10 mt-[100px]'>
            {currentScene.nextScene !== null ? (
              <img
                className="hover-zoom hover-light"
                style={{ width: '40px', opacity: pass ? 1 : 0.5}}
                src={right_arrow}
                alt="right_arrow"
                onClick={pass ? handleNext : () => {}}
              />
            ) : (
              <div style={{ width: '40px' }}></div>
            )}
          </div>
        </div>

        

        <div className='flex md:hidden justify-between mt-2'>
          {currentScene.prevScene !== null ? (
            <img
              className="hover-zoom hover-light"
              style={{ width: '40px' }}
              src={left_arrow}
              alt="left_arrow"
              onClick={handlePrev}
            />
          ) : (
            <div style={{ width: '40px' }}></div>
          )}
          {currentScene.nextScene !== null ? (
            <img
              className="hover-zoom hover-light"
              style={{ width: '40px', opacity: pass ? 1 : 0.5}}
              src={right_arrow}
              alt="right_arrow"
              onClick={pass ? handleNext : () => {}}
            />
          ) : (
            <div style={{ width: '40px' }}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
