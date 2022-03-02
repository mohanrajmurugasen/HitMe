import * as redux from 'redux';
import { io } from "socket.io-client";
import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";

export const increment = "increment";
export const decrement = "decrement";
export const set_name = "set_name";
export const set_email = "set_email";
export const buy = name => dispatch => {
    dispatch({
        type: set_name,
        payload: name,
    })
};
export const ema = email => dispatch => {
    dispatch({
        type: set_email,
        payload: email,
    })
};


const initialvalue = {
    socket: io(`http://192.168.43.101:7000`)
} 

const reducer = (state = initialvalue,action) => {
    switch (action.type) {
        case increment: {
            return{...state}
        }
        case decrement: {
            return{...state}
        }
        default: {
            return state;
        }
    }
}

const vendors = {
    name: {},
}

export function tester(state = vendors, action) {
    switch (action.type) {
        case set_name: 
            return { ...state,name: action.payload };
        default:
            return state;
    }
}

const vendor = {
    email: "",
}

export function setuser(state = vendor, action) {
    switch (action.type) {
        case set_email: 
            return { ...state,email: action.payload };
        default:
            return state;
    }
}

// const rootreducer = (state = {},action) => {
//     return {
//         counter: reducer(state.counter,action),
//         testers: tester(state.testers,action),
//     }
// }

const rootreducer = combineReducers({
    counter: reducer,
    testers: tester,
    setusers: setuser,
})

const store = createStore(rootreducer,applyMiddleware(thunk));

export default store;