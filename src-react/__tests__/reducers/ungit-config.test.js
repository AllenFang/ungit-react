import * as types from 'constants/action-types';

import ungitConfig from 'reducers/ungit-config';

describe('ungit-config.js reducers', () => {
  let initialState;

  it('should return original state if action doesn\'t match any case' , function() {
    const state = ungitConfig(initialState, { type: 'no-op' });
    expect(state).toEqual({});
  });

  describe('when RECEIVE_UNGIT_CONFIG action dispatch', () => {
    it('state should have ungit configuration correctly', function() {
      // TODO: consider to use sinon to mock data and make mock data reuseable and meaningful
      const action = { type: types.RECEIVE_UNGIT_CONFIG, payload: {
        config: {
          allowCheckoutNodes: false,
          autoStashAndPop: true
        },
        platform: 'darwin',
        userHash: '69d23970c3b39b2a8d68a70c30cab99a2bf46e74',
        version: 'dev-1.1.16-071f30a',
        pluginApiVersion: '0.2.0'
      } };

      const state = ungitConfig(initialState, action);
      expect(JSON.stringify(state)).toEqual(JSON.stringify(action.payload));
    });
  });

});