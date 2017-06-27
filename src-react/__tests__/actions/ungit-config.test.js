import { RSAA } from 'redux-api-middleware';
import expect from 'expect.js';

import * as types from 'constants/action-types';
import { fetchUngitConfig } from 'actions/ungit-config';

describe('ungit-config.js action', () => {
  describe('fetchUngitConfig', () => {
    it('returns RSAA action object', function(){
      const action = fetchUngitConfig();

      expect(action[RSAA]).to.be.an('object');
      expect(action[RSAA].endpoint).to.eql('http://localhost:8448/ungit/config');
      expect(action[RSAA].method).to.eql('GET');
      expect(action[RSAA].types).to.be.an('array');
      expect(action[RSAA].types[0]).to.eql(types.FETCH_UNGIT_CONFIG_REQUEST);
      expect(action[RSAA].types[1]).to.be.an('object');
      expect(action[RSAA].types[1].type).to.eql(types.FETCH_UNGIT_CONFIG_SUCCESS);
      expect(action[RSAA].types[2]).to.eql(types.FETCH_UNGIT_CONFIG_FAILURE);
    });
  });
});