import React, { Component } from 'react';
import Todo from './Todo';
import {v4 as uuid} from 'uuid';
import NewTodoForm from './NewTodoForm';
import './TodoList.scss';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      todos: [
        {task:'Finish Todo App', done: false, id:uuid()},
        {task:'Refactor App', done:false, id:uuid()},
        {task:'Get a dog', done:false, id:uuid()},
        {task:'Work remotely', done:true, id:uuid()},
        {task:'Move somewhere hot', done:false, id:uuid()},
        {task:'Debo aprender español', done:false, id:uuid()}
      ]
    };
    this.markDone = this.markDone.bind(this);
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
  }



  // removeBox(boxId){
  //   this.setState({
  //     boxes: [...this.state.boxes.filter(box => box.id !== boxId)]
  //   })
  // }

  remove(idToRemove){
    this.setState({
      todos: this.state.todos.filter(t => t.id !== idToRemove)
    })
  }

  create(newTodo){
    this.setState(state => (
      {todos: [...this.state.todos, newTodo]}
    ))
  }

  update(idToUpdate, updatedTask){
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === idToUpdate){
        return {...todo, task: updatedTask}
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
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
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          done={todo.done}
          markDone={this.markDone}
          removeTodo={this.remove}
          updateTodo={this.update}
        />
      )

    })
    return(
      <div>
        <ul className='TodoList'>
          {todos}
        </ul>
        <NewTodoForm createTodo={this.create}/>
      </div>

    )
  }
}

export default TodoList
