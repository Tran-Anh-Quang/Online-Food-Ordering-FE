import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { authReducer } from './Authenticate/Reducer';
import { thunk } from 'redux-thunk'
import { restaurantReducer } from "./Restaurant/Reducer";
import { menuItemReducer } from "./Menu/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { restaurantsOrderReducer } from "./Restaurant Order/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    menu: menuItemReducer,
    cart: cartReducer,
    order: orderReducer,
    restaurantsOrder: restaurantsOrderReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));