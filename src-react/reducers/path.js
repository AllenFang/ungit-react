import * as types from 'constants/action-types';

function path(state, action) {
  switch(action.type) {
    case types.FETCH_USER_CONFIG_REQUEST:
    case types.FETCH_LATEST_VERSION_REQUEST:
    case types.FETCH_GIT_VERSION_REQUEST:
    case types.FETCH_UNGIT_CONFIG_REQUEST:
      return { ...state, pending: state.pending + 1 };
    case types.FETCH_USER_CONFIG_FAILURE:
    case types.FETCH_LATEST_VERSION_FAILURE:
    case types.FETCH_GIT_VERSION_FAILURE:
    case types.FETCH_UNGIT_CONFIG_FAILURE:
      const { err } = action;
      return { ...state, pending: state.pending - 1, errMessage: [ ...state.errMessage, err ] };
    case types.FETCH_USER_CONFIG_SUCCESS:
    case types.FETCH_LATEST_VERSION_SUCCESS:
    case types.FETCH_GIT_VERSION_SUCCESS:
    case types.FETCH_UNGIT_CONFIG_SUCCESS:
      return { ...state, pending: state.pending - 1 };
    default:
      return { ...state };
  }
}

export default path;