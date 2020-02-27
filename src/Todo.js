import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {
  constructor(props){
    super(props);
    this.handleMarkDone = this.handleMarkDone.bind(this);
  }

  handleMarkDone(e){
    this.props.markDone(this.props.id)
  }
  


  render(){
    return(
      <div className='Todo'>
        <div
          className={`Todo-text ${this.props.done? 'done' : ''}`}
          onClick={this.handleMarkDone}>
            {this.props.text}
          </div>
        <div className='Todo-done'>
          {this.props.done? 'Y' : 'N'}
        </div>
      </div>
    )
  }
}

export default Todo
