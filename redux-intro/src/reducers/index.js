import * as actionTypes from '../actions/actionTypes';

const generatorReducer = (store, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return [
                ...store.slice(0, action.payload.index), Object.assign({},
                    store[action.payload.index], { value: store[action.payload.index].value + action.payload.step }),
                ...store.slice(action.payload.index + 1)];
        case actionTypes.DECREMENT:
            return [
                ...store.slice(0, action.payload.index), Object.assign({},
                    store[action.payload.index], { value: store[action.payload.index].value - action.payload.step }),
                ...store.slice(action.payload.index + 1)];;
        case actionTypes.CLEAR:
            const currentCounter = Object.assign(
                {},
                store[action.payload.index],
                { value: 0 })
            return [
                ...store.slice(0, action.payload.index), currentCounter,
                ...store.slice(action.payload.index + 1)];;
        case actionTypes.ADD_COUNTER:
            return [...store, { index: store.length, value: 0 }];
        case actionTypes.REMOVE_LAST:
            return [...store.slice(0, store.length - 1)];
        default: return store;
    }
};

export default generatorReducer;