import React from 'react'
import useTodos from '../../hooks/useTodos';
import { Todo } from '../../modules/todos'
import TodoItem from './TodoItem';

export default function TodoList() {
    // const todos: Todo[] = []; // TODO: 커스텀 Hook 사용하여 조회

    const todos = useTodos();

    if (todos.length === 0) return <p>등록된 항목이 없습니다.</p>;

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    )
}
