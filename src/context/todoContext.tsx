import React, { useState } from 'react'
import Todo from '../model/todo'

type TodoValueType = {
    items: Todo[],
    addTodo: (text: string) => void,
    deleteTodo: (id: string) => void,
}

export const TodoContext = React.createContext<TodoValueType>({
    items: [],
    addTodo: () => undefined,
    deleteTodo: () => undefined
})

export const ToDoProvider: React.FC = (props) => {
    const [items, setItems] = useState<Todo[]>([])
    const addTodo = (text: string): void => {
        setItems((previousState) => [...previousState, new Todo(text)])
    }
    const deleteTodo = (id: string): void => {
        setItems((previousState) => previousState.filter(todo => todo.id !== id))
    }
    const contextValue: TodoValueType = { items, addTodo, deleteTodo }
    return (
        <TodoContext.Provider value={contextValue}>
            {props.children}
        </TodoContext.Provider>
    )
}
