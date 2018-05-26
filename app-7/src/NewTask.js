import React, { Component } from 'react'

class NewTask extends Component {
    constructor () {
        super()

        this.state = {
            userInput: ''
        }
    }

    handleInputChange = val => {
        this.setState({ userInput: val })
    }

    handleAdd = () => {
        this.props.add( this.state.userInput )
        this.setState({ userInput: ''})
    }

    render() {
        return(
            <div>
                <input value={ this.state.userInput }
                    placeholder='enter new task'
                    onChange = { (event) => this.handleInputChange( event.target.value )}
                />

                <button onClick={ this.handleAdd }>add</button>
            </div>
        )
    }
}

export default NewTask