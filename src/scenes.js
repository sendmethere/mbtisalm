import Home from './components/Home';
import Intro from './components/Intro';
import M_info from './components/M_info';
import M_types from './components/M_types';
import M_test from './components/M_test';
import B_browse from './components/B_browse';
import T_question from './components/T_question';
import T_talk from './components/T_talk';
import I_activities from './components/I_activities';
import I_activity1 from './components/I_activity1';
import I_activity2 from './components/I_activity2';
import I_activity3 from './components/I_activity3';
import Outro from './components/Outro';

const scenes = [
  {
    no: 1,
    sceneName: 'Home',
    sceneTitle: 'M-B-T-I로 가꾸는 나의 삶',
    sceneGuideTitle: '살밍이와 함께 떠나는 진로탐험!',
    sceneGuideContent: '[4-6학년]창체, 도덕, 실과 - 진로 탐색 프로그램',
    sceneComponent: Home,
    passable: true,
    nextScene: null,
    prevScene: null,
  },
  {
    no: 2,
    sceneName: 'Intro',
    sceneTitle: '삶을 가꾸는 여정을 떠나볼까요?',
    sceneGuideTitle: '삶(SALM)이란?',
    sceneGuideContent: <>
    <p>AI를 활용하여 자신의 꿈과 가치를 파악하고, <br/>자기주도적으로 자신의 진로를 계획/실행하여 보다 더 의미있는 삶을 만들어나가는 생애관리 프로젝트.</p>
    <p className='text-lg mt-2 font-bold'>살밍이란?</p>
      <p>이러한 삶 프로젝트를 현재진행형(~ing)으로 함께 도와줘 나가는 셀파.</p>
    </>,
    sceneComponent: Intro,
    passable: false,
    nextScene: 3,
    prevScene: 1,
  },
  {
    no: 3,
    sceneName: 'M_info',
    sceneTitle: 'M : 성격유형 테스트는 무엇인가요?',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: M_info,
    passable: true,
    nextScene: 4,
    prevScene: 2,
  },
  {
    no: 4,
    sceneName: 'M_types',
    sceneTitle: 'M : 성격 유형에는 무엇이 있나요?',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: M_types,
    passable: true,
    nextScene: 5,
    prevScene: 3,
  },
  {
    no: 5,
    sceneName: 'M_test',
    sceneTitle: 'M : 성격 유형을 검사해봅시다.',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: M_test,
    passable: false,
    nextScene: 6,
    prevScene: 4,
  },
  {
    no: 6,
    sceneName: 'B_browse',
    sceneTitle: 'B : 나에게 맞는 직업을 탐색해볼까요?',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: B_browse,
    passable: true,
    nextScene: 7,
    prevScene: 5,
  },
  {
    no: 7,
    sceneName: 'T_question',
    sceneTitle: 'T : 살밍이와의 대화를 하기 전 알고 싶은 질문을 선택하세요',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: T_question,
    passable: true,
    nextScene: 8,
    prevScene: 6,
  },
  {
    no: 8,
    sceneName: 'T_talk',
    sceneTitle: 'T : 살밍이와 대화해봅시다.',
    sceneGuideTitle: '주의하세요!',
    sceneGuideContent: '살밍이는 인공지능 챗봇이에요. 틀린 정보를 줄 수도 있습니다!',
    sceneComponent: T_talk,
    passable: true,
    nextScene: 9,
    prevScene: 7,
  },
  {
    no: 9,
    sceneName: 'I_activities',
    sceneTitle: 'I : 미래로 향한 활동을 해봅시다!',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: I_activities,
    passable: false,
    nextScene: 13,
    prevScene: 8,
  },
  {
    no: 10,
    sceneName: 'I_activity1',
    sceneTitle: '활동 1 : 꿈계단 세우기',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: I_activity1,
    passable: true,
    nextScene: null,
    prevScene: 9,
  },
  {
    no: 11,
    sceneName: 'I_activity2',
    sceneTitle: '활동 2 : 미래 일기 쓰기',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: I_activity2,
    passable: true,
    nextScene: null,
    prevScene: 9,
  },
  {
    no: 12,
    sceneName: 'I_activity3',
    sceneTitle: '활동 3 : 미래 명함 만들기',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: I_activity3,
    passable: true,
    nextScene: null,
    prevScene: 9,
  },
  {
    no: 13,
    sceneName: 'Outro',
    sceneTitle: '우리의 여정은 계속됩니다!',
    sceneGuideTitle: '',
    sceneGuideContent: '',
    sceneComponent: Outro,
    passable: true,
    nextScene: null,
    prevScene: 9,
  },
];

export default scenes;
