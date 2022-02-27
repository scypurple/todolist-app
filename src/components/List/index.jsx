import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const {todos} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => <Item todo={todo} />)
        }
      </ul>
    )
  }
}
