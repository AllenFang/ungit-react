import { CALL_API } from 'redux-api-middleware';
import expect from 'expect.js';

import * as types from 'constants/action-types';
import { fetchUngitConfig } from 'actions/ungit-config';

describe('ungit-config.js action', () => {
  describe('fetchUngitConfig', () => {
    it('returns CALL_API action object', function(){
      const action = fetchUngitConfig();

      expect(action[CALL_API]).to.be.an('object');
      expect(action[CALL_API].endpoint).to.eql('http://localhost:8448/ungit/config');
      expect(action[CALL_API].method).to.eql('GET');
      expect(action[CALL_API].types).to.be.an('array');
      expect(action[CALL_API].types[0]).to.eql(types.FETCH_UNGIT_CONFIG_REQUEST);
      expect(action[CALL_API].types[1]).to.be.an('object');
      expect(action[CALL_API].types[1].type).to.eql(types.FETCH_UNGIT_CONFIG_SUCCESS);
      expect(action[CALL_API].types[2]).to.eql(types.FETCH_UNGIT_CONFIG_FAILURE);
    });
  });
});