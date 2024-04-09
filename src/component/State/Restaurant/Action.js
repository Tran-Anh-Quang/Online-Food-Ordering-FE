import { api } from '../../Config/API';
import {
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_EVENTS_FAILURE,
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_RESTAURANT_FAILURE,
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    DELETE_EVENTS_FAILURE,
    DELETE_EVENTS_REQUEST,
    DELETE_EVENTS_SUCCESS,
    DELETE_RESTAURANT_FAILURE,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    GET_ALL_EVENTS_FAILURE,
    GET_ALL_EVENTS_REQUEST,
    GET_ALL_EVENTS_SUCCESS,
    GET_ALL_RESTAURANTS_FAILURE,
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILURE,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANT_BY_USER_ID_FAILURE,
    GET_RESTAURANT_BY_USER_ID_REQUEST,
    GET_RESTAURANT_BY_USER_ID_SUCCESS,
    GET_RESTAURANT_CATEGORY_FAILURE,
    GET_RESTAURANT_CATEGORY_REQUEST,
    GET_RESTAURANT_CATEGORY_SUCCESS,
    GET_RESTAURANTS_EVENTS_FAILURE,
    GET_RESTAURANTS_EVENTS_REQUEST,
    GET_RESTAURANTS_EVENTS_SUCCESS,
    UPDATE_RESTAURANT_FAILURE,
    UPDATE_RESTAURANT_REQUEST,
    UPDATE_RESTAURANT_STATUS_FAILURE,
    UPDATE_RESTAURANT_STATUS_REQUEST,
    UPDATE_RESTAURANT_STATUS_SUCCESS,
    UPDATE_RESTAURANT_SUCCESS
} from './ActionTypes';

export const getAllRestaurantsAction = (token) => {

    return async (dispatch) => {
        dispatch({ type: GET_ALL_RESTAURANTS_REQUEST })
        try {
            const { data } = await api.get('/api/restaurants', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('all restaurants:', data)
            dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error })
        }
    }
}

export const getRestaurantById = (request) => {

    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST })
        try {
            const response = await api.get(`/api/restaurants/${request.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${request.jwt}`
                }
            })
            dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error })
        }
    }
}

export const getRestaurantByUserId = (token) => {

    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST })
        try {
            const { data } = await api.get(`/api/admin/restaurants/user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('get restaurant by user id: ', data)
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data });
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error.message });
        }
    }
}

export const createRestaurant = (request) => {
    console.log('token', request.token);
    return async (dispatch) => {
        dispatch({ type: CREATE_RESTAURANT_REQUEST })
        try {
            const { data } = await api.post('/api/admin/restaurants', request.data, {
                headers: {
                    Authorization: `Bearer ${request.token}`
                }
            });
            dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })
            console.log('create restaurant: ', data)
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error })
        }
    }
}

export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_REQUEST })
        try {
            const response = await api.put(`/api/admin/restaurants/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: response.data })
            console.log('update restaurant: ', response.data)
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error })
        }
    }
}

export const deleteRestaurant = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_RESTAURANT_REQUEST })
        try {
            const response = await api.delete(`/api/admin/restaurants/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('delete restaurant: ', response.data)
            dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error })
        }
    }
}

export const updateRestaurantStatus = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST })
        try {
            const response = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('update restaurant status: ', response.data)
            dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error })
        }
    }
}

export const createEvent = ({ data, jwt, restaurantId }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_EVENTS_REQUEST })
        try {
            const response = await api.post(`/api/admin/events/restaurant/${restaurantId}`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('create event: ', response.data)
            dispatch({ type: CREATE_EVENTS_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: CREATE_EVENTS_FAILURE, payload: error })
        }
    }
}

export const getAllEvents = ({ jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_EVENTS_REQUEST })
        try {
            const response = await api.get(`/api/events`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('get all events: ', response.data)
            dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
        }
    }
}

export const deleteEvent = ({ eventId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_EVENTS_REQUEST })
        try {
            const response = await api.delete(`/api/admin/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('delete event: ', response.data)
            dispatch({ type: DELETE_EVENTS_SUCCESS, payload: eventId })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: DELETE_EVENTS_FAILURE, payload: error })
        }
    }
}

export const getRestaurantsEvents = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_EVENTS_REQUEST })
        try {
            const response = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('get restaurants events: ', response.data)
            dispatch({ type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_RESTAURANTS_EVENTS_FAILURE, payload: error })
        }
    }
}

export const createCategory = ({ request, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_CATEGORY_REQUEST })
        try {
            const response = await api.post(`/api/admin/category`, request, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log('create category: ', response.data)
            dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error })
        }
    }
}

export const getRestaurantCategory = ({ jwt, restaurantId }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_CATEGORY_REQUEST })
        try {
            const response = await api.get(`/api/category/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: GET_RESTAURANT_CATEGORY_SUCCESS, payload: response.data })
        } catch (error) {
            console.log('error: ', error)
            dispatch({ type: GET_RESTAURANT_CATEGORY_FAILURE, payload: error })
        }
    }
}