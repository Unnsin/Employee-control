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

export const login = (email, password) => {
    return {
        type: LOGIN,
        payload: {
            email, 
            password
        }
    }
}

export const login_success = (username, token, email) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            username,
            token,
            email
        }
    }
}

export const login_error = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: {
            error
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const logout_success = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const logout_error = (error) => {
    return {
        type: LOGOUT_ERROR,
        payload: {
            error
        }
    }
}

export const signup = () => {
    return {
        type: SIGNUP
    }
}

export const signup_success = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        payload: user
    }
}

export const signup_error = () => {
    return {
        type: SIGNUP_ERROR
    }
}