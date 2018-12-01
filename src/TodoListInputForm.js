import React, { Component } from 'react'

class TodoListInputForm extends Component {
  render() {
    return (
      //onSubmit을 하면 새로고침이된다.
      <form onSubmit={this.props.onCreate}> 
        <input
          placeholder="Input here!"
          value={this.props.currentItem.text}
          onChange={this.props.onInputChange}
        />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default TodoListInputForm