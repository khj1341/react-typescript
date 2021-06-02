import { createAction } from "typesafe-actions";

// 액션 type
export const ADD_TODO = 'todos/ADD_TODO'; // as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO'; // as const;
export const REMOVE_TODO = 'todos/REMOVE_TODO'; // as const;

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO)<string>();
// (text: string) => ({
//     type: ADD_TODO,
//     payload: text
// });

export const toggleTodo = createAction(TOGGLE_TODO)<number>();
// (id: number) => ({
//     type: TOGGLE_TODO,
//     payload: id
// });

export const removeTodo = createAction(REMOVE_TODO)<number>();
// (id: number) => ({
//     type: REMOVE_TODO,
//     payload: id
// });