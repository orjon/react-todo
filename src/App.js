import React from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-body'>
        <header className="App-header">
          React To-Do List
        </header>
        <TodoList />
        <footer className="App-footer">
          orjon.com
        </footer>
      </div>
    </div>
  );
}

export default App;
