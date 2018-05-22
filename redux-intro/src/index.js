import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import generatorReducer from './reducers';

const store = createStore(generatorReducer, [{ index: 0, value: 0 }]);
//const generatorReducer = (store, action) => {
//  switch (action.type) {
//      case INCREMENT:
//          return [
//              ...store.slice(0, action.payload.index), Object.assign({},
//                  store[action.payload.index], { value: store[action.payload.index].value + action.payload.step }),
//              ...store.slice(action.payload.index + 1)];
//      case DECREMENT:
//          return [
//              ...store.slice(0, action.payload.index), Object.assign({},
//                  store[action.payload.index], { value: store[action.payload.index].value - action.payload.step }),
//              ...store.slice(action.payload.index + 1)];;
//      case CLEAR:
//          const currentCounter = Object.assign(
//              {},
//              store[action.payload.index],
//              { value: 0 })
//          return [
//              ...store.slice(0, action.payload.index), currentCounter,
//              ...store.slice(action.payload.index + 1)];;
//      case ADD_COUNTER:
//          return [...store, { index: store.length, value: 0 }];
//      case REMOVE_LAST:
//          return [...store.slice(0, store.length - 1)];
//      default: return store;
//  }
//};
//
//const store = createStore(generatorReducer, [{ index: 0, value: 0 }]); 
//const Counter = (props) => {
//  return (
//      <div>
//          <h1>{props.props.value}</h1>
//          <button onClick={() => {
//              store.dispatch(actionObj.incrementCounter({ index: props.props.index, step: 5 }));
//          }}>Increment</button>
//          <button onClick={() => {
//              store.dispatch(actionObj.decrementCounter({ index: props.props.index, step: 5 }));
//          }}>Decrement</button>
//          <button onClick={() => {
//              store.dispatch(actionObj.clear({ index: props.props.index }));
//          }}>Clear</button>
//      </div>
//  )
//};
//
//const ADD_COUNTER = 'ADD_COUNTER';
//const REMOVE_LAST = 'REMOVE_LAST';
//const INCREMENT = 'INCREMENT';
//const DECREMENT = 'DECREMENT';
//const CLEAR = 'CLEAR';
//
//const actionObj = {
//  addCounter: () => {
//      return { type: ADD_COUNTER };
//  },
//  removeLast: () => {
//      return { type: REMOVE_LAST };
//  },
//  incrementCounter: (payload) => {
//      return { type: INCREMENT, payload }
//  },
//  decrementCounter: (payload) => {
//      return { type: DECREMENT, payload }
//  },
//  clear: (payload) => {
//      return { type: CLEAR, payload }
//  }
//};
//
//const CounterWrap = () => {
//  return (
//      <div>
//          {store.getState().map(counter => {
//              return <Counter key={counter.index} props={counter} />
//          })}
//          <button onClick={() => {
//              store.dispatch(actionObj.addCounter());
//          }}>Add Counter</button>
//          <button onClick={() => {
//              store.dispatch(actionObj.removeLast());
//          }}>Remove Counter</button>
//      </div>
//  )
//};
//
//store.subscribe(() => {
//  ReactDOM.render(<CounterWrap />, document.getElementById('root'));
//})

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
