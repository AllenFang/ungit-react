import * as types from 'constants/action-types';
import { apiError } from './common';

export function fetchLatestVersion() {
  return dispatch => {
    // consider wrap API call in separate modules
    // it will be easy to stub module's function when testing
    fetch('http://localhost:8448/api/latestversion')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveLatestVersion(json));
      })
      .catch(e => {
        dispatch(apiError(e.message));
      });
  };
}

export function fetchGitVersion() {
  return dispatch => {
    // consider wrap API call in separate modules
    // it will be easy to stub module's function when testing
    fetch('http://localhost:8448/api/gitversion')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveGitVersion(json));
      })
      .catch(e => {
        dispatch(apiError(e.message));
      });
  };
}

function receiveGitVersion(gitVersion) {
  return {
    type: types.RECEIVE_GIT_VERSION,
    payload: gitVersion
  };
}

function receiveLatestVersion(latestVersion) {
  return {
    type: types.RECEIVE_LATEST_VERSION,
    payload: latestVersion
  };
};