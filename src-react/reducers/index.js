import * as types from 'constants/action-types';

const initialState = {
  ungitConfig: null
};

const ungitApp = function(state = initialState, action) {
  switch(action.type) {
    case types.RECEIVE_UNGIT_CONFIG:
    const { ungitConfig } = action;
      return { ...state, ungitConfig };
    default:
      return { ...state };
  }
}

export default ungitApp;