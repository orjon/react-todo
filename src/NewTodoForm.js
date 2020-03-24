import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import './NewTodoForm.scss';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state={
      task:'',
      done: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState(
      {[e.target.name]: e.target.value}
    )
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTodo({...this.state, id: uuid()})
    this.setState({
      task:''
    }); 
  }

  render(){
    return(
      <div className='TodoNew'>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <label htmlFor='task'></label>
            <input
              placeholder='I need to...'
              type='text'
              id='task'
              name='task'
              value={this.state.task}
              onChange={this.handleChange}>
            </input>
            <button
              className='submit'
              type='submit'>
                +
            </button>
          </div>


        </form>
      </div>
    )
  }
}

export default NewTodoForm;
