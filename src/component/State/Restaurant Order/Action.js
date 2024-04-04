import axios from 'axios';
import { api } from '../../Config/API';
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from './ActionTypes';


export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {

    return async (dispatch) => {
        dispatch({ type: UPDATE_ORDER_STATUS_REQUEST })
        try {
            const reponse = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`, {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                });
            console.log('update order status: ', response.data)
            dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error })
        }
    }
}

export const getRestaurantsOrder = ({ restaurantId, orderStatus, jwt }) => {

    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_ORDER_REQUEST })
        try {
            const { data } = await api.get(`/api/admin/order/restaurant/${restaurantId}`,
                {
                    params: {
                        order_status: orderStatus,
                    },
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    },
                });
            console.log('get restaurants order: ', data)
            dispatch({ type: GET_RESTAURANTS_ORDER_SUCCESS, payload: data})
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_RESTAURANTS_ORDER_FAILURE, payload: error })
        }
    }
}