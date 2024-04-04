import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionTypes";

const initialState = {
    isLoading: false,
    error: null,
    orders: [],
};

export const restaurantsOrderReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_RESTAURANTS_ORDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return { ...state, error: null, isLoading: true };
        case GET_RESTAURANTS_ORDER_SUCCESS:
            return { ...state, isLoading: false, orders: action.payload };
        case UPDATE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orders: state.orders.map(
                    (order) => order.id === action.payload.id ? action.payload : order
                )
            }
        case GET_RESTAURANTS_ORDER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
}