import * as types from 'constants/action-types';

import userConfig from 'reducers/user-config';

describe('user-config.js reducers', () => {
  let initialState;

  it('should return original state if action doesn\'t match any case' , () => {
    const state = userConfig(initialState, { type: types.NO_OP });
    expect(state).toEqual({});
  });

  describe('when FETCH_USER_CONFIG_SUCCESS action dispatch', () => {
    it('state should have user configuration correctly', () => {
      // TODO: consider to use sinon to mock data and make mock data reuseable and meaningful
      const action = { type: types.FETCH_USER_CONFIG_SUCCESS, payload: {
        port: 8080,
	      bugtracking: true
      } };

      const state = userConfig(initialState, action);
      expect(JSON.stringify(state)).toEqual(JSON.stringify(action.payload));
    });
  });

});