import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import SignUp from './container/SignUp'

class GeneralRouter extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token')
    if(!token) {
      // this.history.push('/login')
    }
  }

  render() {
    const { logined } = this.state
    return (
      <>
        <Switch>
          <Route exact path='/' render={() => (<div>Home page</div>)}/>
          <Route path='/login' component={SignUp} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispachToProps)(GeneralRouter);
