import nock from 'nock';
import sinon from 'sinon';
import expect from 'expect.js';
import configureStore from 'redux-mock-store';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware, CALL_API } from 'redux-api-middleware';

import * as types from 'constants/action-types';
import { fetchUngitConfig } from 'actions/ungit-config';

const createMockStore = configureStore([ apiMiddleware ]);

describe('redux-api-middleware::ungit-config', () => {
  describe('fetchUngitConfig successfully', () => {
    const mockPayload = { message: 'success' };

    beforeEach(() => {
      nock('http://localhost:8448')
        .get('/ungit/config')
        .reply(200, mockPayload);

      nock('http://localhost:8448')
        .get('/api/userconfig')
        .reply(200, mockPayload);
    });

    it('should dispatch \'FETCH_UNGIT_CONFIG_REQUEST\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 1) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_UNGIT_CONFIG_REQUEST);
          done();
        }
      });
      store.dispatch(fetchUngitConfig());
    });

    it('should dispatch \'FETCH_UNGIT_CONFIG_SUCCESS\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_UNGIT_CONFIG_REQUEST);
          expect(dispatchedActions[1].type).to.eql(types.FETCH_UNGIT_CONFIG_SUCCESS);
          expect(dispatchedActions[1].payload).to.eql(mockPayload);
          done();
        }
      });
      store.dispatch(fetchUngitConfig());
    });
  });

  describe('fetchUngitConfig fails', () => {

    beforeEach(() => {
      nock('http://localhost:8448')
        .get('/ungit/config')
        .reply(500, null);
    });

    it('should dispatch \'FETCH_UNGIT_CONFIG_FAILURE\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_UNGIT_CONFIG_REQUEST);
          expect(dispatchedActions[1].type).to.eql(types.FETCH_UNGIT_CONFIG_FAILURE);
          expect(dispatchedActions[1].payload).to.be.an('object');
          done();
        }
      });
      store.dispatch(fetchUngitConfig());
    });
  });
});