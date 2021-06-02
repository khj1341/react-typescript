import React from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import { useTodosState } from '../../contexts/TodosContext'

export default function TodoList() {
    const todos = useTodosState();
    return (
        <>
            <TodoForm />
            <ul>
                {todos.map(todo => (<TodoItem key={todo.id} todo={todo} />))}
            </ul>
        </>
    )
}
