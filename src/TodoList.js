import React, { Component } from 'react';
import Todo from './Todo';
import TodoNew from './TodoNew';
import {v4 as uuid} from 'uuid';
import './TodoList.scss';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      todos: [
        {text:'Finish Todo App', done: false, id:uuid()},
        {text:'Refactor App', done:false, id:uuid()},
        {text:'Get a dog', done:false, id:uuid()},
        {text:'Work remotely', done:true, id:uuid()},
        {text:'Move somewhere hot', done:false, id:uuid()},
        {text:'Debo aprender español', done:false, id:uuid()}
      ]
    };
    this.markDone = this.markDone.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  createList(){
    return(
      this.state.todos.map(todo => (
        <Todo key={todo.id} id={todo.id} text={todo.text} done={todo.done} markDone={this.markDone}/>
      ))
    )
  }

  // removeBox(boxId){
  //   this.setState({
  //     boxes: [...this.state.boxes.filter(box => box.id !== boxId)]
  //   })
  // }

  addTodo(todo){
    console.log(todo)
    let newTodo = {...todo, id: uuid()};
    this.setState(state => (
      {todos: [...this.state.todos, newTodo]}
    ))
  }

  markDone(todoId){
    let arrayLocation =this.state.todos.indexOf((this.state.todos.filter(todo => todo.id === todoId))[0]);
    console.log(arrayLocation);
    console.log(this.state.todos[arrayLocation]);
    // this.setState({
    //   todos[arrayLocation] {...this.state.todos[arrayLocation], done: true};
    // })
  }

  render(){
    return(
      <div>
        <div className='TodoList'>
          {this.createList()}
        </div>
        <TodoNew addTodo={this.addTodo}/>
      </div>

    )
  }
}

export default TodoList
