import React from 'react';

import { TodoProvider } from '../TodoContext/TodoContext';

import { AppUI } from './AppUI';

import './App.css';

function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );

}



export default App;
