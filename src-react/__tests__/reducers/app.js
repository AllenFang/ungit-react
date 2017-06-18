import sinon from 'sinon';
import * as types from 'constants/action-types';

import app from 'reducers/app';

describe('app.js reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      gitVersionErrorVisible: false,
      showNewVersionAvailable: false,
      showBugtrackingNagscreen: false,
      showNPSSurvey: false
    };
  });

  describe('when action doesn\'t match any case' , () => {

    it('should return original state except the showNPSSurvey state', () => {
      const state = app(initialState, { type: 'no-op' });
      expect(state.gitVersionErrorVisible).toEqual(initialState.gitVersionErrorVisible);
      expect(state.showNewVersionAvailable).toEqual(initialState.showNewVersionAvailable);
      expect(state.showBugtrackingNagscreen).toEqual(initialState.showBugtrackingNagscreen);
    });

    describe('but last NPS dismissed >= 6 month and Math.random < 0.01', () => {
      beforeEach(() => {
        localStorage.setItem('NPSSurveyLastDismissed', 1466227885);
        sinon.stub(Math, 'random').returns(0.006);
      });

      it('showNPSSurvey state will be true', () => {
        const state = app(initialState, { type: 'no-op' });
        expect(state.showNPSSurvey).toEqual(true);
      });

      afterEach(() => {
        Math.random.restore();
      });
    });

    describe('but last NPS dismissed < 6 month', () => {
      beforeEach(() => {
        localStorage.setItem('NPSSurveyLastDismissed', Date.now());
        sinon.stub(Math, 'random').returns(0.1);
      });

      it('showNPSSurvey state will be false', () => {
        const state = app(initialState, { type: 'no-op' });
        expect(state.showNPSSurvey).toEqual(false);
      });

      afterEach(() => {
        Math.random.restore();
      });
    });

    describe('but Math.random >= 0.01', () => {
      beforeEach(() => {
        localStorage.setItem('NPSSurveyLastDismissed', 1466227885);
        sinon.stub(Math, 'random').returns(0.1);
      });

      it('showNPSSurvey state will be false', () => {
        const state = app(initialState, { type: 'no-op' });
        expect(state.showNPSSurvey).toEqual(false);
      });

      afterEach(() => {
        Math.random.restore();
      });
    });
  });

  describe('when RECEIVE_UNGIT_CONFIG action dispatch', () => {
    describe('if ungitConfig.config.bugtracking is false and bugtrackingNagscreenDismissed is false', () => {
      it('showBugtrackingNagscreen state will be true', () => {
        const ungitConfig = { config: { bugtracking: false } };
        const state = app(initialState, { type: types.RECEIVE_UNGIT_CONFIG, payload: ungitConfig }, { ungitConfig });
        expect(state.showBugtrackingNagscreen).toEqual(true);
      });
    });

    describe('if ungitConfig.config.bugtracking is true', () => {
      it('showBugtrackingNagscreen state will be false', () => {
        const ungitConfig = { config: { bugtracking: true } };
        const state = app(initialState, { type: types.RECEIVE_UNGIT_CONFIG, payload: ungitConfig }, { ungitConfig });
        expect(state.showBugtrackingNagscreen).toEqual(false);
      });
    });

    describe('if bugtrackingNagscreenDismissed is true', () => {
      it('showBugtrackingNagscreen state will be false', () => {
        localStorage.setItem('bugtrackingNagscreenDismissed', true);
        const ungitConfig = { config: { bugtracking: false } };
        const state = app(initialState, { type: types.RECEIVE_UNGIT_CONFIG, payload: ungitConfig }, { ungitConfig });
        expect(state.showBugtrackingNagscreen).toEqual(false);
      });
    });
  });

  describe('when RECEIVE_GIT_VERSION action dispatch', () => {
    describe('if ungitConfig.config.gitVersionCheckOverride is false and gitVersionError is defined && gitVersionErrorDismissed is false', () => {
      it('gitVersionErrorVisible state will be true', () => {
        localStorage.setItem('gitVersionErrorDismissed', false);
        const ungitConfig = { config: { gitVersionCheckOverride: false } };
        const gitVersion = {
          satisfied: false,
          error: 'Failed to parse git version number.'
        };
        const config = { ungitConfig, versions: { gitVersion } };

        const state = app(initialState, { type: types.RECEIVE_GIT_VERSION, payload: gitVersion }, config);
        expect(state.gitVersionErrorVisible).toEqual(true);
      });
    });

    describe('if ungitConfig.config.gitVersionCheckOverride is true', () => {
      it('gitVersionErrorVisible state will be false', () => {
        localStorage.setItem('gitVersionErrorDismissed', false);
        const ungitConfig = { config: { gitVersionCheckOverride: true } };
        const gitVersion = {
          satisfied: false,
          error: 'Failed to parse git version number.'
        };
        const config = { ungitConfig, versions: { gitVersion } };

        const state = app(initialState, { type: types.RECEIVE_GIT_VERSION, payload: gitVersion }, config);
        expect(state.gitVersionErrorVisible).toEqual(false);
      });
    });

    describe('if gitVersionError is not defined', () => {
      it('gitVersionErrorVisible state will be false', () => {
        localStorage.setItem('gitVersionErrorDismissed', false);
        const ungitConfig = { config: { gitVersionCheckOverride: false } };
        const gitVersion = { satisfied: true };
        const config = { ungitConfig, versions: { gitVersion } };

        const state = app(initialState, { type: types.RECEIVE_GIT_VERSION, payload: gitVersion }, config);
        expect(state.gitVersionErrorVisible).toEqual(false);
      });
    });

    describe('if gitVersionErrorDismissed is true', () => {
      it('gitVersionErrorVisible state will be false', () => {
        localStorage.setItem('gitVersionErrorDismissed', true);
        const ungitConfig = { config: { gitVersionCheckOverride: false } };
        const gitVersion = {
          satisfied: false,
          error: 'Failed to parse git version number.'
        };
        const config = { ungitConfig, versions: { gitVersion } };

        const state = app(initialState, { type: types.RECEIVE_GIT_VERSION, payload: gitVersion }, config);
        expect(state.gitVersionErrorVisible).toEqual(false);
      });
    });
  });

  describe('when RECEIVE_LATEST_VERSION action dispatch', () => {
    describe('gitVersionCheckOverride is false and latestVersion.outdated is true', () => {
      it('showNewVersionAvailable state will be true', () => {
        const ungitConfig = { config: { gitVersionCheckOverride: false } };
        const latestVersion = { outdated: true };
        const config = { ungitConfig, versions: { latestVersion } };

        const state = app(initialState, { type: types.RECEIVE_LATEST_VERSION, payload: latestVersion }, config);
        expect(state.showNewVersionAvailable).toEqual(true);
      });
    });

    describe('gitVersionCheckOverride is true', () => {
      it('showNewVersionAvailable state will be false', () => {
        const ungitConfig = { config: { gitVersionCheckOverride: true } };
        const latestVersion = { outdated: true };
        const config = { ungitConfig, versions: { latestVersion } };

        const state = app(initialState, { type: types.RECEIVE_LATEST_VERSION, payload: latestVersion }, config);
        expect(state.showNewVersionAvailable).toEqual(false);
      });
    });

    describe('latestVersion.outdated is true', () => {
      it('showNewVersionAvailable state will be false', () => {
        const ungitConfig = { config: { gitVersionCheckOverride: false } };
        const latestVersion = { outdated: false };
        const config = { ungitConfig, versions: { latestVersion } };

        const state = app(initialState, { type: types.RECEIVE_LATEST_VERSION, payload: latestVersion }, config);
        expect(state.showNewVersionAvailable).toEqual(false);
      });
    });
  });

  describe('when RECEIVE_USER_CONFIG action dispatch', () => {
    describe('userConfig.bugtracking = false and bugtrackingNagscreenDismissed = false', () => {
      it('showBugtrackingNagscreen state will be true', () => {
        const userConfig = { bugtracking: false };
        const ungitConfig = { config: { bugtracking: true } };
        localStorage.setItem('bugtrackingNagscreenDismissed', false);

        const state = app(initialState, { type: types.RECEIVE_USER_CONFIG, payload: userConfig }, { userConfig, ungitConfig });
        expect(state.showBugtrackingNagscreen).toEqual(true);
      });
    });

    describe('userConfig.bugtracking = true', () => {
      it('showBugtrackingNagscreen state will be false', () => {
        const userConfig = { bugtracking: true };
        const ungitConfig = { config: { bugtracking: true } };
        localStorage.setItem('bugtrackingNagscreenDismissed', false);

        const state = app(initialState, { type: types.RECEIVE_USER_CONFIG, payload: userConfig }, { userConfig, ungitConfig });
        expect(state.showBugtrackingNagscreen).toEqual(false);
      });
    });

    describe('bugtrackingNagscreenDismissed = true', () => {
      it('showBugtrackingNagscreen state will be false', () => {
        const userConfig = { bugtracking: false };
        const ungitConfig = { config: { bugtracking: true } };
        localStorage.setItem('bugtrackingNagscreenDismissed', true);

        const state = app(initialState, { type: types.RECEIVE_USER_CONFIG, payload: userConfig }, { userConfig, ungitConfig });
        expect(state.showBugtrackingNagscreen).toEqual(false);
      });
    });
  });
});