import { combineReducers } from 'redux';

import ungitConfig from './ungit-config';
import userConfig from './user-config';
import versions from './versions';

const config = combineReducers({
  ungitConfig,
  userConfig,
  versions
});

export default config;