import React from 'react';
import { connect } from 'react-redux';
import actionsObj from '../actions/index';
import Counter from './Counter';

const mapStateToProps = function (state) {
    return {
        appState: state
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        addCounter: () => {
            dispatch(actionsObj.addCounter());
        },
        removeLast: () => {
            dispatch(actionsObj.removeLast());
        }
    }
}

const CounterWrapper = (props) => {
    return (
        <div>
            
            {props.appState.map(counter => {
                return <Counter key={counter.index} props={counter} />
            })}
            <button onClick={props.addCounter}>Add Counter</button>
            <button onClick={props.removeLast}>Remove Counter</button>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterWrapper);