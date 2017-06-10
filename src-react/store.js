import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ungitApp from './reducers';

const initialState = {
  ungitConfig: null,
  userConfig: null,
  versions: {
    gitVersion: null,
    latestVersion: null
  },
  path: {
    pending: null,
    errMessage: []
  }
};

const store = createStore(ungitApp, initialState, applyMiddleware(thunk));

export default store;