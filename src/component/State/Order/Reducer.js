import { GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes";

const initialState = {
    isLoading: false,
    orders: [],
    error: null,
    notifications: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case GET_USERS_ORDERS_REQUEST:
            return { ...state, error: null, isLoading: true };
        case GET_USERS_ORDERS_SUCCESS:
            return { ...state, error: null, isLoading: false, orders: payload };
        case GET_USERS_ORDERS_FAILURE:
            return { ...state, error: payload, isLoading: false };
        default:
            return state;
    }
}