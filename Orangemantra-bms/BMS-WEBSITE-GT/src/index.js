import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing'

import  createHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';


import {Provider} from 'react-redux';
import { createStore }from 'redux';
import reducer from './Reducers/index';
import MaintenancePage from './MaintenancePage';

const history = createHistory();

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  <Routing></Routing>
  {/* <MaintenancePage /> */}
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
