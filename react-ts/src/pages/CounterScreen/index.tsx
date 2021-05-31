import React, { useState } from 'react'
import { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number { // reducer는 첫번째 파라미터(input) 과 리턴 타입이 동일해야한다.
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

export default function Counter() {
    // const [count, setCount] = useState<number>(0);
    const [count, dispatch] = useReducer(reducer, 0);

    // const onIncrease = () => setCount(count + 1);
    // const onDecrease = () => setCount(count - 1);
    const onIncrease = () => dispatch({ type: 'INCREASE' });
    const onDecrease = () => dispatch({ type: 'DECREASE' });

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>1 추가</button>
                <button onClick={onDecrease}>1 빼기</button>
            </div>
        </>
    )
}
