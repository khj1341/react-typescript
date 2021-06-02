import React from 'react'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../modules'
import { decrease, increase, increaseBy } from '../modules/counter';

// presentation comp, container comp 나누지 않고 하나의 파일에 합치기. (커스텀 훅)
export default function useCounter() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    const onIncreaseBy = useCallback(
        (diff: number) => dispatch(increaseBy(diff)),
        [dispatch]
    );

    return {
        count,
        onIncrease,
        onDecrease,
        onIncreaseBy
    }
}
