import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { authReducer } from './Authenticate/Reducer';
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    auth: authReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));