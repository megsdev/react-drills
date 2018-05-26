import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super() 

    this.state = {
      stuff: [
        'this',
        'is',
        'my',
        'stuff'
      ]
    }

  }
  render() {
    let list = this.state.stuff.map( (element, index) => {
      return(
        <h1 key={ index }>{ element }</h1>
      )
    })

    return (
      <div className="App">
        { list }
      </div>
    );
  }
}

export default App;
