import * as types from 'constants/action-types';

function ungitConfig(state, action) {
  switch(action.type) {
    case types.RECEIVE_UNGIT_CONFIG:
      const { payload: ungitConfig } = action;
      return { ...ungitConfig };
    default:
      return { ...state };
  }
}

export default ungitConfig;