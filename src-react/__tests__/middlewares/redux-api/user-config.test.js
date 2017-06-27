import nock from 'nock';
import sinon from 'sinon';
import expect from 'expect.js';
import configureStore from 'redux-mock-store';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import { FETCH_HEADER } from '../../utils/constants';
import * as types from 'constants/action-types';
import { fetchUserConfig } from 'actions/user-config';

const createMockStore = configureStore([ apiMiddleware ]);

describe('redux-api-middleware::user-config', () => {
  describe('fetchUserConfig successfully', () => {
    const mockPayload = { message: 'success' };

    beforeEach(() => {
      nock('http://localhost:8448')
        .get('/api/userconfig')
        .reply(200, mockPayload, FETCH_HEADER);
    });

    it('should dispatch \'FETCH_USER_CONFIG_REQUEST\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 1) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_USER_CONFIG_REQUEST);
          done();
        }
      });
      store.dispatch(fetchUserConfig());
    });

    it('should dispatch \'FETCH_USER_CONFIG_SUCCESS\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_USER_CONFIG_REQUEST);
          expect(dispatchedActions[1].type).to.eql(types.FETCH_USER_CONFIG_SUCCESS);
          expect(dispatchedActions[1].payload).to.eql(mockPayload);
          done();
        }
      });
      store.dispatch(fetchUserConfig());
    });
  });

  describe('fetchUserConfig fails', () => {

    beforeEach(() => {
      nock('http://localhost:8448')
        .get('/api/userconfig')
        .reply(500, null, FETCH_HEADER);
    });

    it('should dispatch \'FETCH_USER_CONFIG_FAILURE\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_USER_CONFIG_REQUEST);
          expect(dispatchedActions[1].type).to.eql(types.FETCH_USER_CONFIG_FAILURE);
          expect(dispatchedActions[1].payload).to.be.an('object');
          done();
        }
      });
      store.dispatch(fetchUserConfig());
    });
  });
});