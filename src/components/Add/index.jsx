import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Add extends Component {

  handleKeyUp = (event) => {
    const {value} = event.target;
    if (event.keyCode !== 13) return ;
    if (value.trim() === '') return ;
    const todo = {
      id: uuidv4(),
      content: value,
      checked: false,
    }
    this.props.addItem(todo);
    event.target.value = '';
  }
  render() {
    return (
			<div className="todo-header">
				<input type="text" 
        placeholder="请输入你的任务名称，按回车键确认"
        onKeyUp={this.handleKeyUp}
        

        />
			</div>
    )
  }
}
