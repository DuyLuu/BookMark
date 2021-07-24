import { useRef, useContext } from 'react'
import { TodoContext } from '../context/todoContext'

const NewTodo: React.FC = () => {
    const { addTodo } = useContext(TodoContext)
    const inputRef = useRef<HTMLInputElement>(null)
    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const currentText = inputRef.current?.value
        if (currentText?.trim().length) {
            addTodo(currentText)
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Something we need todo</label>
            <input type="text" id="text" ref={inputRef} />
            <button> Add new todo </button>
        </form>
    )
}

export default NewTodo