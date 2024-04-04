import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { authReducer } from './Authenticate/Reducer';
import { thunk } from 'redux-thunk'
import { restaurantReducer } from "./Restaurant/Reducer";
import { menuItemReducer } from "./Menu/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));