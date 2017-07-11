import * as types from 'constants/action-types';
import { RSAA } from 'redux-api-middleware';

export function fetchUserConfig() {
  return {
    [RSAA]: {
      endpoint: 'http://localhost:8448/api/userconfig',
      method: 'GET',
      types: [
        types.FETCH_USER_CONFIG_REQUEST,
        types.FETCH_USER_CONFIG_SUCCESS,
        types.FETCH_USER_CONFIG_FAILURE
      ]
    }
  };
};