import { CALL_API } from 'redux-api-middleware';
import expect from 'expect.js';

import * as types from 'constants/action-types';
import { fetchUserConfig } from 'actions/user-config';

describe('user-config.js action', () => {
  describe('fetchUserConfig', () => {
    it('returns CALL_API action object', function(){
      const action = fetchUserConfig();

      expect(action[CALL_API]).to.be.an('object');
      expect(action[CALL_API].endpoint).to.eql('http://localhost:8448/api/userconfig');
      expect(action[CALL_API].method).to.eql('GET');
      expect(action[CALL_API].types).to.be.an('array');
      expect(action[CALL_API].types[0]).to.eql(types.FETCH_USER_CONFIG_REQUEST);
      expect(action[CALL_API].types[1]).to.eql(types.FETCH_USER_CONFIG_SUCCESS);
      expect(action[CALL_API].types[2]).to.eql(types.FETCH_USER_CONFIG_FAILURE);
    });
  });
});