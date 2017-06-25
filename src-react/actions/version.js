import * as types from 'constants/action-types';
import { CALL_API } from 'redux-api-middleware';

export function fetchLatestVersion() {
  // return {
  //   type: types.FETCH_LATEST_VERSION,
  //   meta: {},
  //   $payload: {
  //     url: 'http://localhost:8448/api/latestversion'
  //   }
  // };
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:8448/api/latestversion',
      method: 'GET',
      types: [
        types.FETCH_LATEST_VERSION_REQUEST,
        types.FETCH_LATEST_VERSION_SUCCESS,
        types.FETCH_LATEST_VERSION_FAILURE
      ]
    }
  };
}

export function fetchGitVersion() {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:8448/api/gitversion',
      method: 'GET',
      types: [
        types.FETCH_GIT_VERSION_REQUEST,
        types.FETCH_GIT_VERSION_SUCCESS,
        types.FETCH_GIT_VERSION_FAILURE
      ]
    }
  };
}
