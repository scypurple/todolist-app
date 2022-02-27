import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

	handleClear = () => {
		// if checked --> delete
		
	}

	render() {
		const {todos} = this.props;
		const finished = todos.reduce((pre, c) => pre + c.checked, 0)
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" />
				</label>
				<span>
					<span>已完成 {finished} </span> / 全部 {todos.length}
				</span>
				<button className="btn btn-danger" 
						onClick={this.handleClear}
				>清除已完成任务</button>
			</div>
		)
	}
}
