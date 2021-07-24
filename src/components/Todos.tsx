import React from 'react'
import TodoItem from './TodoItem'
import Todo from '../model/todo'

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => {
                return <TodoItem key={item.id} value={item} />
            })}
        </ul>
    )
}

export default Todos