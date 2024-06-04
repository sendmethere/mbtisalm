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
    activityCompleted : [null, false, false, false],
    setActivityCompleted: (index) => set((state) => {
        const newActivityCompleted = [...state.activityCompleted];
        newActivityCompleted[index] = true;
        return { activityCompleted: newActivityCompleted };
    }),
    // setActivityCompleted(1) => [null, false, true, false]
    scenesDone: [false, false, false, false, false, false, false, false, false, false, false, false],
    setScenesDone: (index) => set((state) => {
        const newScenesDone = [...state.scenesDone];
        newScenesDone[index] = true;
        return { scenesDone: newScenesDone };
    }),
}));

export default useStore;
