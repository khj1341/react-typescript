import {
    createAction,
    ActionType,
    createReducer
} from 'typesafe-actions';

const INCREASE = 'counter/INCREASE'; // as const (typesafe-actions 사용하면 안써도됨)
const DECREASE = 'counter/DECREASE'; // as const
const INCREASE_BY = 'counter/INCREASE_BY'; // as const

export const increase = createAction(INCREASE)();
// () => ({ type: INCREASE }); (typesafe-actions 사용하면 안써도됨)
export const decrease = createAction(DECREASE)();
// () => ({ type: DECREASE });
export const increaseBy = createAction(INCREASE_BY)<number>();
// (diff: number) => ({
//     type: INCREASE_BY,
//     payload: diff
// });

// (typesafe-actions 사용하면 안써도됨)
// type CounterAction =
//     | ReturnType<typeof increase>
//     | ReturnType<typeof decrease>
//     | ReturnType<typeof increaseBy>;

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

type CounterState = {
    count: number;
};

const initialState: CounterState = {
    count: 0
}

// 리듀서 (typesafe-actions 사용하면 안써도됨)
// function counter(state: CounterState = initialState, action: CounterAction) {
//     switch (action.type) {
//         case INCREASE:
//             return { count: state.count + 1 };
//         case DECREASE:
//             return { count: state.count - 1 };
//         case INCREASE_BY:
//             return { count: state.count + action.payload };
//         default:
//             return state;
//     }
// }

// typesafe-actions 사용
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

// typesafe-actions 체이닝 방식 사용
// const counter = createReducer<CounterState, CounterAction>(initialState)
//     .handleAction(increase, state => ({ count: state.count + 1 }))
//     .handleAction(decrease, state => ({ count: state.count -1  }))
//     .handleAction(increaseBy, (state, action) => ({
//         count: state.count + action.payload
//     }));

export default counter;