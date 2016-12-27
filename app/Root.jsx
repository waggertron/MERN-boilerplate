import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import App from './app.jsx';
import Login from './LoginForm.jsx';
import Signup from './SignupForm.jsx';

const history = require('../node_modules/react-router/lib/hashHistory.js').history;


// convert to main app view
module.exports = (
  <Router history={history}>
    <Route component={App}>
      <Redirect from="/" to="/Login" />
      <Route path="Login" component={Login} />
      <Route path="Signup" component={Signup} />
    </Route>
  </Router>
);
