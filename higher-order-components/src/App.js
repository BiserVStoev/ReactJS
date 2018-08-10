import React, { Component } from 'react';
import BoundForm from './BoundForm';
import './App.css';

function onSubmit(data, e) {
  console.log(data);
}

class App extends Component {
  render() {
    return (
    <div className="App">
        <BoundForm onSubmit={onSubmit}>
          Username:
          <input name='name'/>
          Password:
          <input name='password' type='password'/>
          <input type='submit' value='Submit'/>
          </BoundForm>
      </div>
    );
  }
}

export default App;
