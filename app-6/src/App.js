import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {

  constructor() {
    super() 

    this.state = {
      list: [],
      userInput: ''
    }
  }

  handleInputChange = val => {
    this.setState({ userInput: val})
  }

  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.userInput ],
      userInput: ''
    })
  }

  render() {
    let list = this.state.list.map( ( element, index ) => {
      return (
        <Todo key={ index } task={ element } />
      )
    })
    
    return (
      <div className="App">
        <h2>MY TODO LIST:</h2>
        
        <div>
          <input value={this.state.userInput} placeholder='enter new task' onChange={ (event) => this.handleInputChange( event.target.value ) } />
        
        <button onClick={ this.handleAddTask } >add</button>
        </div>
        <br />

        { list }
      </div>
    );
  }
}

export default App;
