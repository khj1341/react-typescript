import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../modules';

export default function useTodos() {
    const todos = useSelector((state: RootState) => state.todos);
    return todos;
}
