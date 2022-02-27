import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {

	handleClearDone = () => {
		// if checked --> delete
		this.props.clearAllDone();
	}

	handleSelectAll = (event) => {
		// todos checked 
		const {checked} = event.target;
		this.props.selectAll(checked);
	}


	render() {
		const {todos} = this.props;
		const finished = todos.reduce((pre, c) => pre + c.checked, 0)
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={(todos.length !== 0 && todos.length === finished)? true: false} 
					onChange={this.handleSelectAll} />
				</label>
				<span>
					<span>已完成 {finished} </span> / 全部 {todos.length}
				</span>
				<button className="btn btn-danger" 
						onClick={this.handleClearDone}
				>清除已完成任务</button>
			</div>
		)
	}
}
