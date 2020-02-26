import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {



  render(){
    return(
      <div className='Todo'>
        <div className='Todo-text'>{this.props.text}</div>
        <div className='Todo-done'>{this.props.done? 'Y' : 'N'}</div>
      </div>
    )
  }
}

export default Todo
