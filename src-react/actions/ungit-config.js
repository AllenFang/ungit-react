import * as types from 'constants/action-types';
import { fetchUserConfig } from './user-config';
import { apiError } from './common';

export function fetchUngitConfig() {
  return dispatch => {
    // consider wrap API call in separate modules
    // it will be easy to stub module's function when testing
    fetch('http://localhost:8448/ungit/config')
      .then(response => response.json())
      .then(json => {
        if (!json.config.bugtracking) {
          dispatch(fetchUserConfig());
        }
        dispatch(receiveUngitConfig(json));
      })
      .catch(e => {
        dispatch(apiError(e.message));
      });
  };
};

function receiveUngitConfig(ungitConfig) {
  return {
    type: types.RECEIVE_UNGIT_CONFIG,
    payload: ungitConfig
  };
};