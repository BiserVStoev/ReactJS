import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';
import Roster from './components/Roster';
import Bio from './components/Bio';

import observerMenu from './utils/observer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedChar: 0
    };

    this.bioEventHandler = (newState) => {
      this.setState(newState);
    }
  }

  componentDidMount() {
    observerMenu.addObserver('changeFocus', this.bioEventHandler);
  }

  render() {
    return (
      <div className='App'>
        <Slider />
        <Roster clickEventHandler={this.bioEventHandler}/>
        <Bio id={this.state.focusedChar}/>
      </div>
    );
  }
}

export default App;
