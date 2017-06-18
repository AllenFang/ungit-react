import * as types from 'constants/action-types';

import userConfig from 'reducers/user-config';

describe('user-config.js reducers', () => {
  let initialState;

  it('should return original state if action doesn\'t match any case' , () => {
    const state = userConfig(initialState, { type: 'no-op' });
    expect(state).toEqual({});
  });

  describe('when RECEIVE_USER_CONFIG action dispatch', () => {
    it('state should have user configuration correctly', () => {
      // TODO: consider to use sinon to mock data and make mock data reuseable and meaningful
      const action = { type: types.RECEIVE_USER_CONFIG, payload: {
        port: 8080,
	      bugtracking: true
      } };

      const state = userConfig(initialState, action);
      expect(JSON.stringify(state)).toEqual(JSON.stringify(action.payload));
    });
  });

});