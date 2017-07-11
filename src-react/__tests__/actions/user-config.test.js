import { RSAA } from 'redux-api-middleware';
import expect from 'expect.js';

import * as types from 'constants/action-types';
import { fetchUserConfig } from 'actions/user-config';

describe('user-config.js action', () => {
  describe('fetchUserConfig', () => {
    it('returns RSAA action object', function(){
      const action = fetchUserConfig();

      expect(action[RSAA]).to.be.an('object');
      expect(action[RSAA].endpoint).to.eql('http://localhost:8448/api/userconfig');
      expect(action[RSAA].method).to.eql('GET');
      expect(action[RSAA].types).to.be.an('array');
      expect(action[RSAA].types[0]).to.eql(types.FETCH_USER_CONFIG_REQUEST);
      expect(action[RSAA].types[1]).to.eql(types.FETCH_USER_CONFIG_SUCCESS);
      expect(action[RSAA].types[2]).to.eql(types.FETCH_USER_CONFIG_FAILURE);
    });
  });
});