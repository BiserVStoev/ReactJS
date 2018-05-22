import React, { Component } from 'react';
import reqHandler from '../../utils/reqHandler';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.dataCollector = this.dataCollector.bind(this);
        this.login = this.login.bind(this);
    }

    dataCollector(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    login(e) {
        e.preventDefault();
        reqHandler.login(this.state)
        .then(response => {
            localStorage.setItem('kinveyToken', response._kmd.authtoken );
            localStorage.setItem('username', response.username);
        });
    }

    render() {
        return (
            <form id="loginForm" onSubmit={this.login}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input onChange={this.dataCollector} name="username" type="text" />
                <label>Password:</label>
                <input onChange={this.dataCollector} name="password" type="password" />
                <input id="btnLogin" value="Sign In" type="submit" />
            </form>
        )
    }
}

export default Login;