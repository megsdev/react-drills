import  React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange = user => {
        this.setState({ username: user })
    }

    handlePasswordChange = pass => {
        this.setState({ password: pass })
    }

    handleLogin = () => {
        alert('Username: ' + this.state.username + ' Password: ' + this.state.password )
    }

    render() {
        return(
            <div>
                <input onChange={ (event) => this.handleUsernameChange( event.target.value )} type='text' />
                <input onChange={ (event) => this.handlePasswordChange( event.target.value )} type='text' />
                <button onClick={ this.handleLogin }>
                    Login
                </button>
            </div>
        )
    }

}

export default Login