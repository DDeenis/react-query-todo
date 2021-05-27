import React from 'react';
import TodoListContainer from './components/TodoList/TodoListContainer';
import { StyledApp } from './styled';

function App() {
  return (
      <StyledApp>
        <TodoListContainer />
      </StyledApp>
  );
}

export default App;
