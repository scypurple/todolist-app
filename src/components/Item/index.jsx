import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {mouseIsEnter: false}  
  handleCheck = (id) => {
    return () => this.props.update(id);
  }

  handleMouse = (mouseIsEnter) => {
    return () => this.setState({mouseIsEnter});
  }

  handleDelete = (id) => {
    return () => {
      if(window.confirm("delete?")) {
        this.props.deleteItem(id);
      }
  }
}

  render() {
    const {id, content, checked} = this.props.todo;
    const {mouseIsEnter} = this.state;
    return (
      <li 
      onMouseEnter={this.handleMouse(true)}
      onMouseLeave={this.handleMouse(false)}
      className={mouseIsEnter? 'active': ''}
      >
      <label>
        <input type="checkbox" 
        checked={checked} 
        onChange={this.handleCheck(id)}
        />
        <span>{content}</span>
      </label>
      <button 
        className="btn btn-danger" 
        style={{display: mouseIsEnter? 'block' : 'none' }}
        onClick={this.handleDelete(id)}
      >删除</button>
    </li>
    )
  }
}
