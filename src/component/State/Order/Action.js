import { api } from '../../Config/API';
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from './ActionTypes';

export const createOrder = (request) => {

    return async (dispatch) => {
        dispatch({ type: CREATE_ORDER_REQUEST })
        try {
            const { data } = await api.post('/api/order', request.order, {
                headers: {
                    Authorization: `Bearer ${request.token}`
                }
            });
            // if (data.payment_url){
            //     window.location.href = data.payment_url;
            // }
            console.log('create order: ', data)
            dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: CREATE_ORDER_FAILURE, payload: error })
        }
    }
}

export const getUserOrders = (token) => {

    return async (dispatch) => {
        dispatch({ type: GET_USERS_ORDERS_REQUEST })
        try {
            const { data } = await api.get('/api/order/user', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('user orders: ', data)
            dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error })
        }
    }
}