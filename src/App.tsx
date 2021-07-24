import React from 'react';
import Todos from './components/Todos'
import NewTodo from './components/NewTodo'
import { ToDoProvider } from './context/todoContext'

const App: React.FC = () => {
  return (
    <ToDoProvider>
      <NewTodo/>
      <Todos/>
    </ToDoProvider>
  );
}

export default App;
