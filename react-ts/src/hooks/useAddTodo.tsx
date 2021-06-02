import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo } from '../modules/todos';

export default function useAddTodo() {
    const dispatch = useDispatch();
    return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}