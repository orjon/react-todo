import React from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-body'>
        <header className="App-header">
          ToDo &amp; React
        </header>
        <TodoList />
        <footer className="App-footer">
          footer
        </footer>
      </div>
    </div>
  );
}

export default App;
