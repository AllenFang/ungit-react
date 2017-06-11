import * as types from 'constants/action-types';
import { apiError } from './common';

export function fetchUserConfig() {
  return dispatch => {
    // consider wrap API call in separate modules
    // it will be easy to stub module's function when testing
    fetch('http://localhost:8448/api/userconfig')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveUserConfig(json));
      })
      .catch(e => {
        dispatch(apiError(e.message));
      });
  };
};


function receiveUserConfig(userConfig) {
  return {
    type: types.RECEIVE_USER_CONFIG,
    payload: userConfig
  };
};