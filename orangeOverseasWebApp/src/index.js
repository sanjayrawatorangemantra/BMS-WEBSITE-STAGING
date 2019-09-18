import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, browserHistory, IndexRoute } from 'react-router'
import FloatingLabel from "floating-label-react";
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'
import Routes from "./Routes"

const history = createHistory()


ReactDOM.render( <Router history={history}>
  <Routes />
</Router>, document.getElementById('root'));

// ReactDOM.render(<Menu />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// export default Login;