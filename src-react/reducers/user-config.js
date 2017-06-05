import * as types from 'constants/action-types';

function userConfig(state, action) {
  switch(action.type) {
    case types.RECEIVE_USER_CONFIG:
      const { payload: userConfig } = action;
      return { ...userConfig };
    default:
      return { ...state };
  }
}

export default userConfig;