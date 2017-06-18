import * as types from 'constants/action-types';

function versions(state, action) {
  switch(action.type) {
    case types.FETCH_GIT_VERSION_SUCCESS:
      const { data: gitVersion } = action;
      return { ...state, gitVersion };
    case types.FETCH_LATEST_VERSION_SUCCESS:
      const { data: latestVersion } = action;
      return { ...state, latestVersion };
    default:
      return { ...state };
  }
}

export default versions;