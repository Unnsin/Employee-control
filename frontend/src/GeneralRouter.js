import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import SignIn from './container/SignIn';
import SignUp from './container/SignUp';
import Dashboard from './container/Dashboard';

class GeneralRouter extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    if(typeof(token) != "undefined") {
    //   this.props.push('/signin')
    }
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' render={() => (<div>Home page</div>)}/>
          <Route path='/dashboard' component={Dashboard} />
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
