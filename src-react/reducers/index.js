import config from './config';
import app from './app';
import path from './path';

function ungitApp(state, action) {
  const _config = config(state.config, action);
  return {
    config: _config,
    app: app(state.app, action, _config),
    path: path(state.path, action, _config),
  };
}

export default ungitApp;