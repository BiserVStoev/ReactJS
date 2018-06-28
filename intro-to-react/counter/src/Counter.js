import React from 'react';
import './Counter.css';

import renderer from './index.js'

let counter = 0;

const incrementCounter = () => {
  ++counter;
  renderer(Counter(), document.getElementById('root'));
};

const Counter = () => (
  <div>
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
    <h4>Header 4</h4>
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  </div>
);

export default Counter;
