import { createStore } from 'redux';
import ungitApp from './reducers';

const store = createStore(ungitApp);

export default store;