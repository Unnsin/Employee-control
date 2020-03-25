import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../utils/auth'

const PrivateRouter = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => isAuth() ? <Component { ...props } /> : <Redirect to={{ pathname: '/signin' }}/>} 
    />
)

export default PrivateRouter