import React from 'react';
import { connect } from 'react-redux';
import actionsObj from '../actions/index';

const mapStateToProps = function (state) {
    return {
        appState: state
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        incrementCounter: (payload) => {
            dispatch(actionsObj.incrementCounter(payload));
        },
        decrementCounter: (payload) => {
            dispatch(actionsObj.decrementCounter(payload));
        },
        clear: (payload) => {
            dispatch(actionsObj.clear(payload));
        }
    }
}

const Counter = (props) => {
    return (
        <div>
            <h1>{props.props.value}</h1>
            <button onClick={() => {
                props.incrementCounter({ index: props.props.index, step: 5 });
            }}>Increment</button>
            <button onClick={() => {
                props.decrementCounter({ index: props.props.index, step: 5 });
            }}>Decrement</button>
            <button onClick={() => {
                props.clear({ index: props.props.index });
            }}>Clear</button>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);