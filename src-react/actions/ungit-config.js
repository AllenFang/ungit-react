import * as types from 'constants/action-types';

export function fetchUngitConfig() {
  return dispatch => {
    dispatch(pending());
    // consider wrap API call in separate modules
    // it will be easy to stub module's function when testing
    fetch('http://localhost:8448/ungit/config')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveUgitConfig(json));
      })
      .catch(e => {
        dispatch(apiError(e.message));
      });
  };
};

export function receiveUgitConfig(ungitConfig) {
  return {
    type: types.RECEIVE_UNGIT_CONFIG,
    payload: ungitConfig
  };
};

export function pending() {
  return {
    type: types.PATH_PAGE_PENDING
  };
};

export function apiError(message) {
  return {
    type: types.PATH_PAGE_API_ERR,
    payload: message
  };
}