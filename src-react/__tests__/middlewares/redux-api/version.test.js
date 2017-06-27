import nock from 'nock';
import sinon from 'sinon';
import expect from 'expect.js';
import configureStore from 'redux-mock-store';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import { FETCH_HEADER } from '../../utils/constants';
import * as types from 'constants/action-types';
import { fetchLatestVersion, fetchGitVersion } from 'actions/version';

const createMockStore = configureStore([ apiMiddleware ]);

describe('redux-api-middleware::version', () => {
  describe('fetchLatestVersion successfully', () => {
    const mockPayload = { message: 'success' };

    beforeEach(() => {
      nock('http://localhost:8448')
        .get('/api/latestversion')
        .reply(200, mockPayload, FETCH_HEADER);
    });

    it('should dispatch \'FETCH_LATEST_VERSION_REQUEST\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 1) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_LATEST_VERSION_REQUEST);
          done();
        }
      });
      store.dispatch(fetchLatestVersion());
    });

    it('should dispatch \'FETCH_USER_CONFIG_SUCCESS\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_LATEST_VERSION_REQUEST);
          expect(dispatchedActions[1].type).to.eql(types.FETCH_LATEST_VERSION_SUCCESS);
          expect(dispatchedActions[1].payload).to.eql(mockPayload);
          done();
        }
      });
      store.dispatch(fetchLatestVersion());
    });
  });

  describe('fetchLatestVersion fails', () => {

    beforeEach(() => {
      nock('http://localhost:8448')
        .get('/api/latestversion')
        .reply(500, null, FETCH_HEADER);
    });

    it('should dispatch \'FETCH_LATEST_VERSION_FAILURE\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_LATEST_VERSION_REQUEST);
          expect(dispatchedActions[1].type).to.eql(types.FETCH_LATEST_VERSION_FAILURE);
          expect(dispatchedActions[1].payload).to.be.an('object');
          done();
        }
      });
      store.dispatch(fetchLatestVersion());
    });
  });

  describe('fetchGitVersion successfully', () => {
    const mockPayload = { message: 'success' };

    beforeEach(() => {
      nock('http://localhost:8448')
        .get('/api/gitversion')
        .reply(200, mockPayload, FETCH_HEADER);
    });

    it('should dispatch \'FETCH_GIT_VERSION_REQUEST\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 1) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_GIT_VERSION_REQUEST);
          done();
        }
      });
      store.dispatch(fetchGitVersion());
    });

    it('should dispatch \'FETCH_GIT_VERSION_SUCCESS\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_GIT_VERSION_REQUEST);
          expect(dispatchedActions[1].type).to.eql(types.FETCH_GIT_VERSION_SUCCESS);
          expect(dispatchedActions[1].payload).to.eql(mockPayload);
          done();
        }
      });
      store.dispatch(fetchGitVersion());
    });
  });

  describe('fetchGitVersion fails', () => {

    beforeEach(() => {
      nock('http://localhost:8448')
        .get('/api/gitversion')
        .reply(500, null, FETCH_HEADER);
    });

    it('should dispatch \'FETCH_GIT_VERSION_FAILURE\'', done => {
      const store = createMockStore({});
      
      store.subscribe(() => {
        const dispatchedActions = store.getActions();
        if (dispatchedActions.length === 2) {
          expect(dispatchedActions[0].type).to.eql(types.FETCH_GIT_VERSION_REQUEST);
          expect(dispatchedActions[1].type).to.eql(types.FETCH_GIT_VERSION_FAILURE);
          expect(dispatchedActions[1].payload).to.be.an('object');
          done();
        }
      });
      store.dispatch(fetchGitVersion());
    });
  });
});