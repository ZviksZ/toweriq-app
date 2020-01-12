import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware                                          from 'redux-thunk';
import usersReducer                                             from "./usersReducer.js";

let reducers = combineReducers({
   users: usersReducer,
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;