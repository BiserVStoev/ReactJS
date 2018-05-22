import React, { Component } from 'react';
import reqHandler from '../../utils/reqHandler';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            repeatPass: ''
        };

        this.dataCollector = this.dataCollector.bind(this);
        this.register = this.register.bind(this);
    }

    dataCollector(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    register(e) {
        e.preventDefault();
        reqHandler.register(this.state)
        .then(d => console.log(d));
    }

    render() {
        return (
            <form id="registerForm" onSubmit={this.register}>
                <h2>Register</h2>
                <label>Username:</label>
                <input onChange={this.dataCollector} name="username" type="text" />
                <label>Password:</label>
                <input onChange={this.dataCollector} name="password" type="password" />
                <label>Repeat Password:</label>
                <input onChange={this.dataCollector} name="repeatPass" type="password" />
                <input id="btnRegister" value="Sign Up" type="submit" />
            </form>
        )
    }
}

export default Register;