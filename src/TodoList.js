import React, { Component } from 'react';
import Todo from './Todo';
import TodoNew from './TodoNew';
import {v4 as uuid} from 'uuid';
import './TodoList.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      todos: [
        {text:'Finish Todo App', done:'false'},
        {text:'Refactor App', done:false},
        {text:'Get a dog', done:false},
        {text:'Move somewhere hot', done:false},
        {text:'Debo aprender español', done:false}
      ]
    }
  }

  createList(){
    return(
      this.state.todos.map(todo => (
        <Todo key={uuid()} text={todo.text} done={todo.done} />
      ))
    )
  }

  render(){
    return(
      <div>
        <div className='TodoList'>
          {this.createList()}
        </div>
        <TodoNew />
      </div>

    )
  }
}

export default TodoList
