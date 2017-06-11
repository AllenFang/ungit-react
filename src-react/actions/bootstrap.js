import { fetchUngitConfig } from './ungit-config';
import { fetchLatestVersion, fetchGitVersion } from './version';
import { pending } from './common';

export function bootstrap() {
  return dispatch => {
    dispatch(pending(3));
    dispatch(fetchUngitConfig());
    dispatch(fetchLatestVersion());
    dispatch(fetchGitVersion());
  };
}