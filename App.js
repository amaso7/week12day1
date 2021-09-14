const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if(action.type == 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if(action.type == 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    } else if(action.type == 'DEC_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type == 'SUB_COUNTER') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }

    console.log(state)
    return state
}

const store = createStore(reducer)


store.dispatch({type: 'INC_COUNTER'})
console.log(store.getState())
store.dispatch({type: 'ADD_COUNTER', value: 100})
console.log(store.getState())
store.dispatch({type: 'DEC_COUNTER'})
console.log(store.getState())
store.dispatch({type: 'SUB_COUNTER', value: 25})
console.log(store.getState())