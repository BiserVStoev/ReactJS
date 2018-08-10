import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Header extends Component {
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        localStorage.removeItem('kinveyToken');
        this.props.history.replace('/');
    }

    render() {
        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                {
                    this.props.isAuthenticated
                        ?
                        <div id="profile"><span>{localStorage.getItem('username')}</span>|<a href='javascript:void(0)' onClick={this.logout}>logout</a></div>
                        :
                        null
                }
            </header>
        )
    }
};

export default withRouter(Header);