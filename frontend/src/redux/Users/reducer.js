import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
} from './action'

const initialState = {
    login: false,
    loading: false,
    currentUser: {},
    error: ''
}

export default function (state = initialState, {type, payload}) {
    switch(type) {
        case LOGIN: 
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                login: true,
                currentUser: payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                error: payload.message
            }
        case LOGOUT:
            return {
                ...state,
                loading: true
            }
        case LOGOUT_SUCCESS: 
            return {
                ...state,
                login: false
            }
        case LOGOUT_ERROR: 
            return {
                ...state,
                error: payload.message
            }
        case SIGNUP: 
            return {
                ...state,
                loading: true
            }
        case SIGNUP_SUCCESS: 
            return {
                ...state,
                login: true,
                currentUser: payload
            }
        case SIGNUP_ERROR: 
            return {
                ...state,
                error: payload.message
            }
        default:
            return {
                ...state
            }
        
    }
}

