import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  
  handleChange = (event) => {
  
  }

  render() {
    const {todo} = this.props;
    return (
      <li>
      <label>
        <input type="checkbox" checked={todo.checked} onChange={this.handleChange} />
        <span>{todo.content}</span>
      </label>
      <button 
        className="btn btn-danger" 
      >删除</button>
    </li>
    )
  }
}
