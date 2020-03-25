import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import PrivateRoute from './component/PrivateRoute'
import SignIn from './container/SignIn';
import SignUp from './container/SignUp';
import Dashboard from './container/Dashboard';

class GeneralRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' render={() => (<Redirect to='/signin'/>)}/>
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </>
    );
  }
}

const mapDispachToProps = dispatch => ({
  push: (url) => dispatch(push(url))
})


export default connect(null, mapDispachToProps)(GeneralRouter);
