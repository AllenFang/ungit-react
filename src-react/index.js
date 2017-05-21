import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Path from './containers/path';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={ store }>
    <Path />
  </Provider>,
  document.getElementById('root')
);
