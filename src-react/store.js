import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ungitApp from './reducers';

const initialState = {
  ungitConfig: null,
  path: {
    pending: false,
    errMessage: null
  }
};

const store = createStore(ungitApp, initialState, applyMiddleware(thunk));

export default store;