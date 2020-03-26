import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing : false,
      done: false,
      task: this.props.task
    }
    this.handleMarkDone = this.handleMarkDone.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  handleMarkDone(){
    this.props.markDone(this.props.id)
  }

  toggleForm(){
    this.setState({isEditing: !this.state.isEditing})
  }

  handleRemove(){
    this.props.removeTodo(this.props.id)
  }

  handleChange(e){
    this.setState(
      {[e.target.name]: e.target.value}
    )
  }

  handleUpdate(e){
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({isEditing: false})
  }


  render(){
    let result;
    if (this.state.isEditing){
      result = (
        <div className='Todo'>
          <form className='Todo-task' >
            <input className='Todo-update' type='text' value={this.state.task} name='task' onChange={this.handleChange}></input>
          </form>
          <button onClick={this.handleUpdate}className='Todo-save'>Save</button>
        </div>
      )
    } else {
      result = (
        <div className='Todo'>
          <span className='Todo-doneBox' onClick={this.handleMarkDone}>
            {this.props.done? '☒' : '☐'}
          </span>
          <li
            className={`Todo-task ${this.props.done? 'done' : ''}`}
            onClick={this.handleMarkDone}>
              {this.props.task}
          </li>
          <button onClick={this.toggleForm} className='Todo-edit'>Edit</button>
          <button onClick={this.handleRemove} className='Todo-delete'>X</button>
        </div>
      )
    }
    return result
  }
}

export default Todo
