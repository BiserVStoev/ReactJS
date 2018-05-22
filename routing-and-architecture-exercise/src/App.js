import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import GuestHome from './components/auth/GuestHome';
import LoggedWrapper from './components/common/LoggedWrapper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: ''
    };
  }

  componentDidMount() {
    if (localStorage.getItem('kinveyToken')) {
      this.setState({ token: localStorage.getItem('kinveyToken') })
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header isAuthenticated={this.state.token !== ''}/>
          {
            this.state.token === '' ? <GuestHome /> : <LoggedWrapper />
          }
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
