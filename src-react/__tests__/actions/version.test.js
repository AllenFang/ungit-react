import { RSAA } from 'redux-api-middleware';
import expect from 'expect.js';

import * as types from 'constants/action-types';
import { fetchLatestVersion, fetchGitVersion } from 'actions/version';

describe('version.js action', () => {
  describe('fetchLatestVersion', () => {
    it('returns RSAA action object', function(){
      const action = fetchLatestVersion();

      expect(action[RSAA]).to.be.an('object');
      expect(action[RSAA].endpoint).to.eql('http://localhost:8448/api/latestversion');
      expect(action[RSAA].method).to.eql('GET');
      expect(action[RSAA].types).to.be.an('array');
      expect(action[RSAA].types[0]).to.eql(types.FETCH_LATEST_VERSION_REQUEST);
      expect(action[RSAA].types[1]).to.eql(types.FETCH_LATEST_VERSION_SUCCESS);
      expect(action[RSAA].types[2]).to.eql(types.FETCH_LATEST_VERSION_FAILURE);
    });
  });

  describe('fetchGitVersion', () => {
    it('returns RSAA action object', function(){
      const action = fetchGitVersion();

      expect(action[RSAA]).to.be.an('object');
      expect(action[RSAA].endpoint).to.eql('http://localhost:8448/api/gitversion');
      expect(action[RSAA].method).to.eql('GET');
      expect(action[RSAA].types).to.be.an('array');
      expect(action[RSAA].types[0]).to.eql(types.FETCH_GIT_VERSION_REQUEST);
      expect(action[RSAA].types[1]).to.eql(types.FETCH_GIT_VERSION_SUCCESS);
      expect(action[RSAA].types[2]).to.eql(types.FETCH_GIT_VERSION_FAILURE);
    });
  });
});