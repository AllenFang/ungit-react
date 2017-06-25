import * as types from 'constants/action-types';

function ungitConfig(state, action) {
  switch(action.type) {
    case types.FETCH_UNGIT_CONFIG_SUCCESS:
      const { payload: ungitConfig } = action;
      return { ...ungitConfig };
    default:
      return { ...state };
  }
}

export default ungitConfig;