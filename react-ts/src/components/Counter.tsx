import useCounter from "../hooks/useCounter";

type CounterProps = {
    count: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff: number) => void;
};

// #1. presentation comp, container comp 분리
// export default function Counter({
//     count,
//     onIncrease,
//     onDecrease,
//     onIncreaseBy
// }: CounterProps) {
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//             <button onClick={() => onIncreaseBy(3)}>+3</button>
//         </div>
//     )
// }

// #2. presentation comp, container comp 통합 (hooks 폴더의 useCounter (커스텀 훅) 사용)
export default function Counter() {
    const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

    return (
                <div>
                    <h1>{count}</h1>
                    <button onClick={onIncrease}>+1</button>
                    <button onClick={onDecrease}>-1</button>
                    <button onClick={() => onIncreaseBy(3)}>+3</button>
                </div>
            )
}