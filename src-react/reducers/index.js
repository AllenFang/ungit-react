import { combineReducers } from 'redux';

import path from './path';
import config from './config';

const ungitApp = combineReducers({
  config,
  path
});

export default ungitApp;