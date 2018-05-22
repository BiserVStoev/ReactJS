import * as actionTypes from '../actions/actionTypes';

const actionObj = {
    addCounter: () => {
        return { type: actionTypes.ADD_COUNTER };
    },
    removeLast: () => {
        return { type: actionTypes.REMOVE_LAST };
    },
    incrementCounter: (payload) => {
        return { type: actionTypes.INCREMENT, payload }
    },
    decrementCounter: (payload) => {
        return { type: actionTypes.DECREMENT, payload }
    },
    clear: (payload) => {
        return { type: actionTypes.CLEAR, payload }
    }
};

export default actionObj;