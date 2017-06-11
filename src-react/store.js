import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ungitApp from './reducers';

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

const store = createStore(ungitApp, initialState, applyMiddleware(thunk));

export default store;