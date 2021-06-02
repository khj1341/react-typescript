import React from 'react'
import useTodoActions from '../../hooks/useTodoActions';
import { Todo } from '../../modules/todos';

import './TodoItem.css';

type TodoItemProps = {
    todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {

    const { onToggle, onRemove } = useTodoActions(todo.id);

    return (
        <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
            <span className="text" onClick={onToggle}>{todo.text}</span>
            <span className="remove" onClick={onRemove}>(X)</span>
        </li>
    )
}
