import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ungitApp from './reducers';

const store = createStore(ungitApp, applyMiddleware(thunk));

export default store;