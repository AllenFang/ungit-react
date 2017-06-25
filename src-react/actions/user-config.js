import * as types from 'constants/action-types';
import { CALL_API } from 'redux-api-middleware';

export function fetchUserConfig() {
  return {
    [CALL_API]: {
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