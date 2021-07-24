import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/todoContext'

const Todos: React.FC = () => {
    const { items } = useContext(TodoContext)

    return (
        <ul>
            {items.map((item) => {
                return <TodoItem key={item.id} value={item} />
            })}
        </ul>
    )
}

export default Todos