import create from 'zustand';

const useStore = create((set) => ({
    sceneIndex: 0,
    setSceneIndex: (index) => set({ sceneIndex: index }),
    nickname: '',
    setNickname: (nickname) => set({ nickname }),
    selectedMBTI: '',
    setSelectedMBTI: (mbti) => set({ selectedMBTI: mbti }),
    selectedJob: '',
    setSelectedJob: (job) => set({ selectedJob: job }),
    pass: false,
    setPass: (pass) => set({ pass }),

    // 활동 완료
    activityCompleted : [null, false, false, false],
    setActivityCompleted: (index) => set((state) => {
        const newActivityCompleted = [...state.activityCompleted];
        newActivityCompleted[index] = true;
        return { activityCompleted: newActivityCompleted };
    }),

    // 장면 진행
    scenesDone: [null, false, false, false, false, false, false, false, false, false, false, false, false],
    setScenesDone: (index) => set((state) => {
        const newScenesDone = [...state.scenesDone];
        newScenesDone[index] = true;
        return { scenesDone: newScenesDone };
    }),

    // 질문
    selectedQuestions: [null, false, false, false, false, false, false, false, false, false, false], // 1~10
    setSelectedQuestions: (index, bool) => set((state) => {
        const newSelectedQuestions = [...state.selectedQuestions];
        newSelectedQuestions[index] = bool;
        return { selectedQuestions: newSelectedQuestions };
    }),
}));

export default useStore;
