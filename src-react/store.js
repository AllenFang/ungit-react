import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import ungitApp from './reducers';

// const middlewares = [thunk, fetchMiddleware];

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

const store = createStore(ungitApp, initialState, applyMiddleware(apiMiddleware));

export default store;