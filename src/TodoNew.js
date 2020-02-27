import React, { Component } from 'react';
import './TodoNew.scss';

class TodoNew extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
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
    this.props.addTodo(this.state)
    this.setState({
      text:'',
      done: false
    });
  }

  render(){
    return(
      <div className='TodoNew'>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            {/* <label htmlFor='text'></label> */}
            <input
              placeholder='I need to...'
              type='text'
              id='text'
              name='text'
              value={this.state.text}
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

export default TodoNew;
