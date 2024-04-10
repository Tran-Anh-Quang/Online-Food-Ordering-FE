import { api } from '../../Config/API';
import {
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    CLEAR_CART_FAILURE,
    CLEAR_CART_REQUEST,
    CLEAR_CART_SUCCESS,
    FIND_CART_FAILURE,
    FIND_CART_REQUEST,
    FIND_CART_SUCCESS,
    GET_ALL_CART_ITEMS_FAILURE,
    GET_ALL_CART_ITEMS_REQUEST,
    GET_ALL_CART_ITEMS_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS
} from './ActionTypes';


export const findCart = (token) => {

    return async (dispatch) => {
        dispatch({ type: FIND_CART_REQUEST })
        try {
            const response = await api.get('/api/cart', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('my cart: ', response.data)
            dispatch({ type: FIND_CART_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: FIND_CART_FAILURE, payload: error })
        }
    }
}

export const getAllCartItems = (request) => {

    return async (dispatch) => {
        dispatch({ type: GET_ALL_CART_ITEMS_REQUEST })
        try {
            const response = await api.get(`/api/cart/${request.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${request.token}`
                }
            })
            dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error })
        }
    }
}

export const addItemToCart = (request) => {

    return async (dispatch) => {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
        try {
            const { data } = await api.put(`/api/cart/add`, request.cartItem, {
                headers: {
                    Authorization: `Bearer ${request.token}`
                }
            })
            console.log('add item to cart: ', data)
            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
        }
    }
}

export const updateCartItem = (request) => {

    return async (dispatch) => {
        dispatch({ type: UPDATE_CART_ITEM_REQUEST })
        try {
            const { data } = await api.put(`/api/cart-item/update`, request.data, {
                headers: {
                    Authorization: `Bearer ${request.token}`
                }
            })
            console.log('update cart item: ', data)
            dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
        }
    }
}

export const removeCartItem = ({ cartItemId, jwt }) => {

    return async (dispatch) => {
        dispatch({ type: REMOVE_CART_ITEM_REQUEST })
        try {
            const { data } = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log('remove cart item: ', data)
            dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
        }
    }
}

export const clearCart = () => {

    return async (dispatch) => {
        dispatch({ type: CLEAR_CART_REQUEST });
        try {
            const { data } = await api.put(`/api/cart/clear`, {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
            dispatch({ type: CLEAR_CART_SUCCESS, payload: data })
            console.log('clear cart: ', data)
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: CLEAR_CART_FAILURE, payload: error.message })
        }
    }
}