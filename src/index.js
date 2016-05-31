//Entry point for our javascript

import 'babel-polyfill'; //transpile what babel can't
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory } from 'react-router';
// browserHistory - gives us nice clean urls

import routes from './routes';
import './styles/styles.css'; //Webpack can import css files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
