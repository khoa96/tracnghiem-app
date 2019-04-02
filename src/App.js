import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';

import Test from './components/Test';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import ErrorMessage from './components/common/ErrorMessage';

export default class App extends Component {
  render() {
    return (
      <div id="page-top">
        <Router>
          <Nav />
          <Switch>
             <Route  path="/" exact={true} component={Home}/>
             <Route  path="/login" exact={true} component={LoginPage}/>
             <Route  path="/test" exact={true} component={Test}/>
             <Route  path="/register" exact={true} component={RegisterPage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
