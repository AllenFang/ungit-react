import * as types from 'constants/action-types';

function app(state, action, config) {
  
  switch(action.type) {
    case types.FETCH_UNGIT_CONFIG_SUCCESS: {
      const { ungitConfig } = config;
      const bugtrackingNagscreenDismissed = localStorage.getItem('bugtrackingNagscreenDismissed') === 'true';
      const showBugtrackingNagscreen = !ungitConfig.config.bugtracking && !bugtrackingNagscreenDismissed;

      return { ...state, showBugtrackingNagscreen };
    }

    case types.FETCH_GIT_VERSION_SUCCESS: {
      const { ungitConfig, versions: { gitVersion } } = config;
      const gitVersionCheckOverride = ungitConfig.config && ungitConfig.config.gitVersionCheckOverride;
      const gitVersionErrorDismissed = localStorage.getItem('gitVersionErrorDismissed') === 'true';
      const gitVersionError = gitVersion && !gitVersion.satisfied && gitVersion.error;
      const gitVersionErrorVisible = !gitVersionCheckOverride && gitVersionError && !gitVersionErrorDismissed;

      return { ...state, gitVersionErrorVisible };
    }
    
    case types.FETCH_LATEST_VERSION_SUCCESS: {
      const { ungitConfig, versions: { latestVersion } } = config;
      const gitVersionCheckOverride = ungitConfig.config && ungitConfig.config.gitVersionCheckOverride;
      const outdated = latestVersion && latestVersion.outdated;
      const showNewVersionAvailable = !gitVersionCheckOverride && outdated;

      return { ...state, showNewVersionAvailable };
    }

    case types.FETCH_USER_CONFIG_SUCCESS: {
      const { userConfig } = config;
      const bugtrackingNagscreenDismissed = localStorage.getItem('bugtrackingNagscreenDismissed') === 'true';
      const showBugtrackingNagscreen = !userConfig.bugtracking && !bugtrackingNagscreenDismissed;

      return { ...state, showBugtrackingNagscreen };
    }

    case types.DISMISS_GIT_VERSION_ERROR:{
      localStorage.setItem('gitVersionErrorDismissed', true);
      return { ...state, gitVersionErrorVisible: false };
    }

    case types.DISMISS_NEW_VERSION: {
      return { ...state, showNewVersionAvailable: false };
    }

    default:
      const NPSSurveyLastDismissed = parseInt(localStorage.getItem('NPSSurveyLastDismissed') || '0', 10);
      const monthsSinceNPSLastDismissed = (Date.now() - NPSSurveyLastDismissed) / (1000 * 60 * 60 * 24 * 30);
      const showNPSSurvey = monthsSinceNPSLastDismissed >= 6 && Math.random() < 0.01;
      return { ...state, showNPSSurvey };
  }
}

export default app;