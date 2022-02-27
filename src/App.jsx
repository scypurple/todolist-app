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

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Add addItem={this.addItem} />
          <List todos={this.state.todos} />
          <Footer />
        </div>
      </div>
    )
  }
}

