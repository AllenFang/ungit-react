import { combineReducers } from 'redux';

import path from './path';
import ungitConfig from './ungit-config';
import userConfig from './user-config';
import versions from './versions';


const ungitApp = combineReducers({
  ungitConfig,
  userConfig,
  versions,
  path
});

export default ungitApp;