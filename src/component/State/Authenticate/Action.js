import axios from 'axios';
import { ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_REQUEST, REGISTER_SUCCESS, LOGOUT, REGISTER_FAILURE, LOGIN_FAILURE, GET_USER_FAILURE, ADD_TO_FAVORITE_FAILURE } from './ActionTypes';
import { api, API_URL } from '../../Config/API';

export const registerUser = (request) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/register`, request.userData)
        if (data.token) localStorage.setItem('jwt', data.token);
        if (data.role === 'ROLE_RESTAURANT_OWNER') {
            request.navigate('/admin/restaurant')
        } else {
            request.navigate('/')
        }
        dispatch({ type: REGISTER_SUCCESS, payload: data.token });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error })
        console.log('error', error)
    }
}

export const loginUser = (request) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await axios.post(`${API_URL}/auth/login`, request.userData)

        if (data.token) localStorage.setItem('jwt', data.token);
        if (data.role === 'ROLE_RESTAURANT_OWNER') {
            request.navigate('/admin/restaurant')
        } else {
            request.navigate('/')
        }
        dispatch({ type: LOGIN_SUCCESS, payload: data.token });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error })
        console.log('error', error)
    }
}

export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await api.get(`/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error })
        console.log('error', error)
    }
}

export const addRestaurantToFavorite = ({ jwt, restaurantId }) => async (dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST })
    try {
        const { data } = await api.put(`/api/restaurants/${restaurantId}/add-to-favorites`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error })
        console.log('error', error)
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
    try {
        localStorage.clear();
        dispatch({ type: LOGOUT });
        console.log('logout success')
    } catch (error) {
        console.log('error', error)
    }
}