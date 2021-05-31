import React from 'react'
import { useReducer } from 'react';

type Color = 'red' | 'orange' | 'yellow';

type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action = 
    | { type: 'SET_COUNT'; count: number }
    | { type: 'SET_TEXT'; text: string }
    | { type: 'SET_COLOR'; color: Color }
    | { type: 'TOGGLE_GOOD' }
    
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            };
        case 'SET_TEXT':
            return  {
                ...state,
                text: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('Unhandled action');
    }
}

export default function ReducerSample() {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });

    const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
    const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' });
    const setColor = () => dispatch({ type: 'SET_COLOR', color: 'orange' });
    const setIsGood = () => dispatch({ type: 'TOGGLE_GOOD'});

    return (
        <div>
            <p>
                <code>count: </code> {state.count}
            </p>
            <p>
                <code>text: </code> {state.text}
            </p>
            <p>
                <code>color: </code> {state.color}
            </p>
            <p>
                <code>isGood: </code> {state.isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>SET COUNT</button>
                <button onClick={setText}>SET TEXT</button>
                <button onClick={setColor}>SET COLOR</button>
                <button onClick={setIsGood}>TOGGLE GOOD</button>
            </div>
        </div>
    )
}
