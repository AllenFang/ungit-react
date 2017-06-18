import * as types from 'constants/action-types';

export function fetchUserConfig() {
  return {
    type: types.FETCH_USER_CONFIG,
    meta: {},
    $payload: {
      url: 'http://localhost:8448/api/userconfig'
    }
  };
};