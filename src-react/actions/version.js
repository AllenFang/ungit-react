import * as types from 'constants/action-types';

export function fetchLatestVersion() {
  return {
    type: types.FETCH_LATEST_VERSION,
    meta: {},
    $payload: {
      url: 'http://localhost:8448/api/latestversion'
    }
  };
}

export function fetchGitVersion() {
  return {
    type: types.FETCH_GIT_VERSION,
    meta: {},
    $payload: {
      url: 'http://localhost:8448/api/gitversion'
    }
  };
}
