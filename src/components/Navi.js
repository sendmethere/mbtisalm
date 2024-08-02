import useStore from "../store";

const Navi = () => {

    const setSceneIndex = useStore((state) => state.setSceneIndex);

    return(
        <div>
            <p>개발용 장면 바로가기</p>
            <div className="flex gap-2">
            {
            Array.from({length: 13}, (v, i) => i ).map((i) => {
                return (
                    <div
                        key={i}
                        className="p-2 cursor-pointer bg-slate-100 rounded hover:brightness-90"
                        onClick={() => setSceneIndex(i)}
                    >
                        {i}
                    </div>
                )
            }
            )
            }
            </div>
    </div>
    )
};

export default Navi;