import React, { Component } from 'react';
import Todo from './components/todo';
import './styles/App.css';

let id = 0
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    }
  }

  addTodo(input) {
    this.setState({
      todoList: [...this.state.todoList, {id: id++, text: input, checked: false}]
    })
  }

  handleInput(event) {
    event.preventDefault()
    let input = document.getElementById('desc')
    this.addTodo(input.value)
    input.value = ''
  }

  removeTodo(id) {
    this.setState({
      todoList: this.state.todoList.filter(x => {
        if(x.id !== id) {
          return x
        }
        else {
          return null
        }
      })
    })
  }

  checkTodo(id) {
    this.setState({
      todoList: this.state.todoList.map(x => {
        if(x.id !== id) {
          return x
        }
        return {
          id: x.id,
          text: x.text,
          checked: !x.checked
        }
      })
    })
  }

  render() { 
    return (
      <div className="container">
        <div className="container-todo">
          <h1>Todo App</h1>
          <form onSubmit={(event) => this.handleInput(event)}>
            <input id="desc" type="text" placeholder="Type todo here" maxLength="30" required></input>
            <input type="submit"></input>
          </form>
          <ul>
            {this.state.todoList.map(x => 
            <Todo 
              key={x.id} 
              todo={x} 
              onDelete={() => this.removeTodo(x.id)}
              onCheck={() => this.checkTodo(x.id)}>           
            </Todo>)}
          </ul>
        </div>        
      </div>
    )
  }
}
 
export default App;
 

