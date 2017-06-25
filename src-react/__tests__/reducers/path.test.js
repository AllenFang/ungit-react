import * as types from 'constants/action-types';

import path from 'reducers/path';

describe('path.js reducers', () => {
  let initialState;
  
  const REQUEST_ACTIONS = [
    types.FETCH_USER_CONFIG_REQUEST,
    types.FETCH_LATEST_VERSION_REQUEST,
    types.FETCH_GIT_VERSION_REQUEST, 
    types.FETCH_UNGIT_CONFIG_REQUEST 
  ];
  
  const SUCCESS_ACTIONS = [
    types.FETCH_USER_CONFIG_SUCCESS,
    types.FETCH_LATEST_VERSION_SUCCESS,
    types.FETCH_GIT_VERSION_SUCCESS, 
    types.FETCH_UNGIT_CONFIG_SUCCESS 
  ];

  const FAILURE_ACTIONS = [
    types.FETCH_USER_CONFIG_FAILURE,
    types.FETCH_LATEST_VERSION_FAILURE,
    types.FETCH_GIT_VERSION_FAILURE, 
    types.FETCH_UNGIT_CONFIG_FAILURE 
  ];

  beforeEach(() => {
    initialState = {
      pending: null,
      errMessage: []
    };
  });

  it('should return original state if action doesn\'t match any case' , function() {
    const state = path(initialState, { type: types.NO_OP });
    expect(state.pending).toEqual(initialState.pending);
    expect(state.errMessage.length).toEqual(initialState.errMessage.length);
  });

  REQUEST_ACTIONS.forEach(actionName => {
    describe(`when ${actionName} action dispatch`, () => {
      beforeEach(() => {
        initialState = {
          pending: 1,
          errMessage: []
        };
      });
      it('pending state should be plus one', () => {
        const action = { type: actionName };

        const state = path(initialState, action);
        expect(state.pending).toEqual(initialState.pending + 1);
      });
    });
  });

  SUCCESS_ACTIONS.forEach(actionName => {
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

  FAILURE_ACTIONS.forEach(actionName => {
    describe(`when ${actionName} action dispatch`, () => {
      beforeEach(() => {
        initialState = {
          pending: 1,
          errMessage: []
        };
      });
      it('pending state should be minused one', () => {
        const action = { type: actionName, payload: { message: 'error' } };

        const state = path(initialState, action);
        expect(state.pending).toEqual(initialState.pending - 1);
        expect(state.errMessage[0]).toEqual(action.payload.message);
      });
    });
  });
});