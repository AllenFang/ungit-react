import * as types from 'constants/action-types';

function userConfig(state, action) {
  switch(action.type) {
    case types.FETCH_USER_CONFIG_SUCCESS:
      const { payload: userConfig } = action;
      return { ...userConfig };
    default:
      return { ...state };
  }
}

export default userConfig;