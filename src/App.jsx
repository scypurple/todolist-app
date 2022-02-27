import React, { Component } from 'react';
import Add from './components/Add';
import Footer from './components/Footer';
import List from './components/List';
import './App.css'

export default class App extends Component {
  state = {todos: [
    {id: "001", content: "起床", checked: true},
    {id: "002", content: "吃饭", checked: true},
    {id: "003", content: "睡觉", checked: false},
 ]};
  
  addItem = (todo) => {
    const {todos} = this.state;
    this.setState({todos: [todo, ...todos]})
  }

  deleteItem = (id) => {
    const {todos} = this.state;
    const newList = todos.filter(todo => todo.id !== id)
    this.setState({todos: newList});
  }

  update = (id) => {
    const {todos} = this.state;
    const updateTodo = todos.map((todo) => {if(todo.id=== id) todo.checked = !todo.checked; return todo;});
    this.setState({todos: updateTodo});
  }

  selectAll = (checked) => {
    const {todos} = this.state;
    const selectAll = todos.map(todo => {todo.checked = checked; return todo;});
    this.setState({todos: selectAll});
  }

  clearAllDone = () => {
    const {todos} = this.state;
    const clearAllDone = todos.filter(todo => !todo.checked);
    this.setState({todos: clearAllDone});
  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add addItem={this.addItem} />
          <List todos={this.state.todos} deleteItem={this.deleteItem} update={this.update}/>
          <Footer todos={this.state.todos} selectAll={this.selectAll} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}

