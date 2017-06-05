import * as types from 'constants/action-types';

function path(state, action) {
  switch(action.type) {
    case types.PATH_PAGE_PENDING:
      return { ...state, pending: true };
    case types.RECEIVE_UNGIT_CONFIG:
    case types.RECEIVE_USER_CONFIG:
    case types.RECEIVE_GIT_VERSION:
    case types.RECEIVE_LATEST_VERSION:
      return { ...state, pending: false };
    case types.PATH_PAGE_API_ERR:
      const { payload: errMessage } = action;
      return { ...state, pending: false, errMessage: [ ...state.errMessage, errMessage ] };
    default:
      return { ...state };
  }
}

export default path;