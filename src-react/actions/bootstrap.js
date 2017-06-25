import * as types from 'constants/action-types';
import { fetchUngitConfig } from './ungit-config';
import store from 'store';
import { fetchLatestVersion, fetchGitVersion } from './version';

export function bootstrap() {
  store.dispatch(fetchUngitConfig());
  store.dispatch(fetchLatestVersion());
  store.dispatch(fetchGitVersion());
  return { type: types.NO_OP };
}