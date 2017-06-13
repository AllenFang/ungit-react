import * as types from 'constants/action-types';

import path from 'reducers/path';

describe('path.js reducers', () => {
  let initialState;
  const DECREASE_PENDING_ACTIONS = [
    types.RECEIVE_UNGIT_CONFIG,
    types.RECEIVE_USER_CONFIG,
    types.RECEIVE_GIT_VERSION, 
    types.RECEIVE_LATEST_VERSION 
  ];

  beforeEach(() => {
    initialState = {
      pending: null,
      errMessage: []
    };
  });

  it('should return original state if action doesn\'t match any case' , function() {
    const state = path(initialState, { type: 'no-op' });
    expect(state.pending).toEqual(initialState.pending);
    expect(state.errMessage.length).toEqual(initialState.errMessage.length);
  });

  describe('when PATH_PAGE_PENDING action dispatch', () => {
    it('pending state should be calculated correctly', function() {
      const action1 = { type: types.PATH_PAGE_PENDING, payload: 1 };
      const action2 = { type: types.PATH_PAGE_PENDING, payload: 3 };

      const state1 = path(initialState, action1);
      expect(state1.pending).toEqual(initialState.pending + action1.payload);

      const state2 = path(state1, action2);
      expect(state2.pending).toEqual(state1.pending + action2.payload);
    });
  });

  DECREASE_PENDING_ACTIONS.forEach(actionName => {
    describe(`when ${actionName} action dispatch`, () => {
      beforeEach(() => {
        initialState = {
          pending: 1,
          errMessage: []
        };
      });
      it('pending state should be minused one', () => {
        const action = { type: actionName };

        const state = path(initialState, action);
        expect(state.pending).toEqual(initialState.pending - 1);
      });
    });
  });
  
  describe('when PATH_PAGE_API_ERR action dispatch', () => {
    it('pending state should be minused one', function() {
      const action = { type: types.PATH_PAGE_API_ERR, payload: 'error message' };

      const state = path(initialState, action);
      expect(state.pending).toEqual(initialState.pending - 1);
    });

    it('errMessage state should correct content', function() {
      const action = { type: types.PATH_PAGE_API_ERR, payload: 'error message' };

      const state = path(initialState, action);
      expect(state.errMessage.length).toEqual(initialState.errMessage.length + 1);
      expect(state.errMessage[0]).toEqual(action.payload);
    });
  });
});