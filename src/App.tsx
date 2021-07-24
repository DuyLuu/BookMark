import React, { useState } from 'react';
import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
import Todo from './model/todo'

const App: React.FC = () => {
  const [todos, setTodo] = useState<Todo[]>([])
  return (
    <div>
      <NewTodo addNewTodo={(value) => setTodo(todos.concat(new Todo(value)))} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
