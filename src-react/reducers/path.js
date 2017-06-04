import * as types from 'constants/action-types';

function path(state, action) {
  switch(action.type) {
    case types.PATH_PAGE_PENDING:
      return { ...state, pending: true };
    case types.RECEIVE_UNGIT_CONFIG:
      return { ...state, pending: false };
    case types.PATH_PAGE_API_ERR:
      const { payload: errMessage } = action
      return { ...state, pending: false, errMessage };
    default:
      return { ...state };
  }
}

export default path;