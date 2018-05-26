import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
  }

  handleAddTask = task => {
    this.setState({ list: [...this.state.list, task ]})

  }
  render() {
    return (
      <div className="App">
      <h1>MY TODO LIST:</h1>
      <NewTask add={ this.handleAddTask } />
      <List tasks={ this.state.list } />
      </div>
    );
  }
}

export default App;
