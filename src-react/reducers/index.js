import { combineReducers } from 'redux';

import path from './path';
import ungitConfig from './ungit-config';


const ungitApp = combineReducers({
  ungitConfig,
  path
});

export default ungitApp;