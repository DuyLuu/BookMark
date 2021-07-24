import React from 'react'
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: string[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => {
                return <TodoItem value={item} />
            })}
        </ul>
    )
}

export default Todos