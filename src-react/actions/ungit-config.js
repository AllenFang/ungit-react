import * as types from 'constants/action-types';
import { fetchUserConfig } from './user-config';
import store from 'store';

export function fetchUngitConfig() {
  return {
    type: types.FETCH_UNGIT_CONFIG,
    meta: {},
    $payload: {
      url: 'http://localhost:8448/ungit/config',
      onResponse: response => {
        if (response.status === 200) {
          store.dispatch(fetchUserConfig());
          return;
        } else {
          return false;
        }
      }
    }
  };
};
