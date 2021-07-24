import Todo from '../model/todo'
const TodoItem: React.FC<{ value: Todo }> = (props) => {
    return <li>{props.value.name}</li>
}

export default TodoItem