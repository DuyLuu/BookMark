import { useRef } from 'react'

const NewTodo: React.FC<{ addNewTodo: (text: string) => void }> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const currentText = inputRef.current?.value
        if (currentText?.trim().length) {
            props.addNewTodo(currentText)
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