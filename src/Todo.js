import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
  constructor(props){
    super(props);
    this.handleMarkDone = this.handleMarkDone.bind(this);
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleMarkDone(){
    this.props.markDone(this.props.id)
  }

  handleRemove(){
    this.props.removeTodo(this.props.id)
  }
  


  render(){
    return(
      <div className='Todo'>
        <li
          className={`Todo-task ${this.props.done? 'done' : ''}`}
          onClick={this.handleMarkDone}>
            {this.props.task}
        </li>
        {/* <div className='Todo-done'>
          {this.props.done? 'Y' : 'N'}
        </div> */}
        <button className='Todo-edit'>Edit</button>
        <button onClick={this.handleRemove} className='Todo-delete'>X</button>
      </div>
    )
  }
}

export default Todo
