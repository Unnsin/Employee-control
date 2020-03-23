import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from './action'

const initialState = {
    login: false,
    loading: false,
    currentUser: {},
    error: ''
}

export default function (state = initialState, action) {
    switch(action.type) {
        case LOGIN: 
            return {
                ...state
            }
        case LOGIN_SUCCESS: 
            return {
                ...state
            }
        case LOGIN_ERROR:
            return {
                ...state
            }
        case LOGOUT:
            return {
                ...state
            }
        case LOGOUT_SUCCESS: 
            return {
                ...state
            }
        case LOGOUT_ERROR: 
            return {
                ...state
            }
        default:
            return {
                ...state
            }
        
    }
}

