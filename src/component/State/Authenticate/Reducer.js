import { isPresentInFavorites } from "../../Config/Logic";
import {
    ADD_TO_FAVORITE_FAILURE,
    ADD_TO_FAVORITE_REQUEST,
    ADD_TO_FAVORITE_SUCCESS,
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    GET_USER_SUCCESS,
    LOGOUT
} from "./ActionTypes";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorites: [],
    success: null
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return { ...state, isLoading: true, error: null, success: null };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, jwt: action.payload, success: "register success" };
        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, user: action.payload };
        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                favorites: isPresentInFavorites(state.favorites, action.payload)
                    ? state.favorites.filter((item) => item.id !== action.payload.id)
                    : [action.payload, ...state.favorites],
            };
        case LOGOUT:
            return initialState;
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
            return { ...state, isLoading: false, error: action.payload, success: null };
        default:
            return state;
    }
}