import * as types from 'constants/action-types';

import versions from 'reducers/versions';

describe('versions.js reducers', () => {
  const initialState = {
    gitVersion: null,
    latestVersion: null
  };

  it('should return original state if action doesn\'t match any case' , () => {
    const state = versions(initialState, { type: 'no-op' });
    expect(state).toEqual(initialState);
  });

  describe('when RECEIVE_GIT_VERSION action dispatch', () => {
    it('state should have git version configuration correctly', () => {
      // TODO: consider to use sinon to mock data and make mock data reuseable and meaningful
      const action = { type: types.RECEIVE_GIT_VERSION, payload: {
        requiredVersion: '>=1.8.x',
        satisfied: true,
        version: '2.3.2'
      } };

      const state = versions(initialState, action);
      expect(JSON.stringify(state.gitVersion)).toEqual(JSON.stringify(action.payload));
    });
  });

  describe('when RECEIVE_LATEST_VERSION action dispatch', () => {
    it('state should have lastest configuration correctly', () => {
      // TODO: consider to use sinon to mock data and make mock data reuseable and meaningful
      const action = { type: types.RECEIVE_LATEST_VERSION, payload: {
        currentVersion: 'dev-1.1.16-071f30a',
        latestVersion: '1.1.19',
        outdated: false
      } };

      const state = versions(initialState, action);
      expect(JSON.stringify(state.latestVersion)).toEqual(JSON.stringify(action.payload));
    });
  });

});