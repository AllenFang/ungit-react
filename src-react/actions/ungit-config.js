import * as types from 'constants/action-types';
import { CALL_API } from 'redux-api-middleware';
import { fetchUserConfig } from './user-config';
import store from 'store';

export function fetchUngitConfig() {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:8448/ungit/config',
      method: 'GET',
      types: [
        types.FETCH_UNGIT_CONFIG_REQUEST,
        {
          type: types.FETCH_UNGIT_CONFIG_SUCCESS,
          payload: (action, state, res) => {
            store.dispatch(fetchUserConfig());
            return res.json().then(json => json);
          }
        },
        types.FETCH_UNGIT_CONFIG_FAILURE
      ]
    }
  };
};
