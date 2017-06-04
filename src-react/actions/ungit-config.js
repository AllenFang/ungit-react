import * as types from 'constants/action-types';
export function fetchUngitConfig() {
  return dispatch => {
    // consider wrap API call in separate modules
    // it will be easy to stub module's function when testing
    fetch('http://localhost:8448/ungit/config')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveUgitConfig(json));
      });
  };
};

export function receiveUgitConfig(ungitConfig) {
  return {
    type: types.RECEIVE_UNGIT_CONFIG,
    ungitConfig
  };
};