import * as types from 'constants/action-types';

function versions(state, action) {
  switch(action.type) {
    case types.RECEIVE_GIT_VERSION:
      const { payload: gitVersion } = action;
      return { ...state, gitVersion };
    case types.RECEIVE_LATEST_VERSION:
      const { payload: latestVersion } = action;
      return { ...state, latestVersion };
    default:
      return { ...state };
  }
}

export default versions;