import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      filterString: '',
      list: [
        'bananas',
        'oranges',
        'bread',
        'chips',
        'salsa',
        'avocado',
      ]
    }
  }

  handleChange = ( inputText ) => {
    
    this.setState({ filterString: inputText })
    }
  


  render() {

    let filteredList = this.state.list.filter( (element, index) => {
      return element.includes( this.state.filterString );
    })
    console.log('this is filteredList', filteredList)

    let listToDisplay = filteredList.map( (element, index) => {
      return <h1 key={ index }>{ element }</h1>
    })




    return (
      <div className="App">
      
      <input onChange={ (event) => this.handleChange( event.target.value ) } type='text'/>
      {listToDisplay}
      </div>
    );
  }
}

export default App;

