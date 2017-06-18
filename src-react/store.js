import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMiddlewareCreator from 'redux-fetch-middleware';
import ungitApp from './reducers';

const fetchMiddleware = fetchMiddlewareCreator({
  suffix: ['REQUEST', 'SUCCESS', 'FAILURE'],
  debug: process.env.NODE_ENV === 'development',
  fetchOptions: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
});

const middlewares = [thunk, fetchMiddleware];

const initialState = {
  config: {
    ungitConfig: null,
    userConfig: null,
    versions: {
      gitVersion: null,
      latestVersion: null
    }
  },
  app: {
    gitVersionErrorVisible: false,
    showNewVersionAvailable: false,
    showBugtrackingNagscreen: false,
    showNPSSurvey: false
  },
  path: {
    pending: null,
    errMessage: []
  }
};

const store = createStore(ungitApp, initialState, applyMiddleware(...middlewares));

export default store;