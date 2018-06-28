import React from 'react';
import './Timer.css';

const Timer = () => (
  <div className="container">
    <h1>Text node 1</h1>
    <h2>Text node 2</h2>
    <h3>Text node 3</h3>
    <h1>Timer: {new Date(Date.now()).toLocaleTimeString()}</h1>
  </div>
);

export default Timer;
