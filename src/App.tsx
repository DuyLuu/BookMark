import React from 'react';
import Todos from './components/Todos'

const App: React.FC = () => {
  return (
    <div>
      <Todos items={['Learning English', 'Learning Codding', 'Clean the house']} />
    </div>
  );
}

export default App;
