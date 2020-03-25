import {
    signup,
    signup_success,
    signup_error,
    login,
    login_success,
    login_error,
    logout,
    logout_success,
    logout_error
} from './actionCreator'
import { push } from 'connected-react-router'


export const signupThunk = ({ username, password, email }) => dispatch  => {
    dispatch(signup())
    fetch('http://localhost:5000/users/signup', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*' 
        },
        body: JSON.stringify({
            username,
            password,
            email,
        })
    })
        .then(res=> res.json())
        .then(res => { 
            localStorage.setItem('token', res.token)
            return res
        })
        .then(res => dispatch(signup_success(res)))
        .then(() => dispatch(push('/dashboard')))
        .catch(err => dispatch(signup_error(err)))
}

export const signin = ({ email, password }) => dispatch => {
    dispatch(login())
    fetch('http://localhost:5000/users/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem('token', res.token)
            return res
        })
        .then(res => dispatch(login_success(res)))
        .then(() => dispatch(push('/dashboard')))
        .catch(err => dispatch(login_error(err)))
}

export const logoutThunk = () => dispatch => {
    dispatch(logout())
    fetch('http://localhost:5000/users/logout', {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        }  
    })
        .then(res => {
            console.log('e')
            dispatch(login_success())
            localStorage.removeItem('token')
            dispatch(push('/signin'))
        })
        .catch(err => dispatch(login_error(err)))
}