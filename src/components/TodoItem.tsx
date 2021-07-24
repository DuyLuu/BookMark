import { useContext } from 'react'
import Todo from '../model/todo'
import { TodoContext } from '../context/todoContext'
const TodoItem: React.FC<{ value: Todo }> = (props) => {
    const { deleteTodo } = useContext(TodoContext)
    return <li onClick={() => deleteTodo(props.value.id)}>{props.value.name}</li>
}

export default TodoItem