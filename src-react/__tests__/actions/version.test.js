import { CALL_API } from 'redux-api-middleware';
import expect from 'expect.js';

import * as types from 'constants/action-types';
import { fetchLatestVersion, fetchGitVersion } from 'actions/version';

describe('version.js action', () => {
  describe('fetchLatestVersion', () => {
    it('returns CALL_API action object', function(){
      const action = fetchLatestVersion();

      expect(action[CALL_API]).to.be.an('object');
      expect(action[CALL_API].endpoint).to.eql('http://localhost:8448/api/latestversion');
      expect(action[CALL_API].method).to.eql('GET');
      expect(action[CALL_API].types).to.be.an('array');
      expect(action[CALL_API].types[0]).to.eql(types.FETCH_LATEST_VERSION_REQUEST);
      expect(action[CALL_API].types[1]).to.eql(types.FETCH_LATEST_VERSION_SUCCESS);
      expect(action[CALL_API].types[2]).to.eql(types.FETCH_LATEST_VERSION_FAILURE);
    });
  });

  describe('fetchGitVersion', () => {
    it('returns CALL_API action object', function(){
      const action = fetchGitVersion();

      expect(action[CALL_API]).to.be.an('object');
      expect(action[CALL_API].endpoint).to.eql('http://localhost:8448/api/gitversion');
      expect(action[CALL_API].method).to.eql('GET');
      expect(action[CALL_API].types).to.be.an('array');
      expect(action[CALL_API].types[0]).to.eql(types.FETCH_GIT_VERSION_REQUEST);
      expect(action[CALL_API].types[1]).to.eql(types.FETCH_GIT_VERSION_SUCCESS);
      expect(action[CALL_API].types[2]).to.eql(types.FETCH_GIT_VERSION_FAILURE);
    });
  });
});