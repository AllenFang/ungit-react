import * as types from 'constants/action-types';

function app(state, action, config) {
  
  switch(action.type) {
    case types.RECEIVE_UNGIT_CONFIG: {
      const { ungitConfig } = config;
      const bugtrackingNagscreenDismissed = localStorage.getItem('bugtrackingNagscreenDismissed') === 'true';
      const showBugtrackingNagscreen = !ungitConfig.config.bugtracking && !bugtrackingNagscreenDismissed;

      return { ...state, showBugtrackingNagscreen };
    }

    case types.RECEIVE_GIT_VERSION: {
      const { ungitConfig, versions: { gitVersion } } = config;
      const gitVersionCheckOverride = ungitConfig.config && ungitConfig.config.gitVersionCheckOverride;
      const gitVersionErrorDismissed = localStorage.getItem('gitVersionErrorDismissed') === 'true';
      const gitVersionError = gitVersion && !gitVersion.satisfied && gitVersion.error;
      const gitVersionErrorVisible = !gitVersionCheckOverride && gitVersionError && !gitVersionErrorDismissed;

      return { ...state, gitVersionErrorVisible };
    }
    
    case types.RECEIVE_LATEST_VERSION: {
      const { ungitConfig, versions: { latestVersion } } = config;
      const gitVersionCheckOverride = ungitConfig.config && ungitConfig.config.gitVersionCheckOverride;
      const outdated = latestVersion && latestVersion.outdated;
      const showNewVersionAvailable = !gitVersionCheckOverride && outdated;

      return { ...state, showNewVersionAvailable };
    }

    case types.RECEIVE_USER_CONFIG: {
      const { userConfig } = config;
      const bugtrackingNagscreenDismissed = localStorage.getItem('bugtrackingNagscreenDismissed') === 'true';
      const showBugtrackingNagscreen = !userConfig.bugtracking && !bugtrackingNagscreenDismissed;

      return { ...state, showBugtrackingNagscreen };
    }
    default:
      const NPSSurveyLastDismissed = parseInt(localStorage.getItem('NPSSurveyLastDismissed') || '0', 10);
      const monthsSinceNPSLastDismissed = (Date.now() - NPSSurveyLastDismissed) / (1000 * 60 * 60 * 24 * 30);
      const showNPSSurvey = monthsSinceNPSLastDismissed >= 6 && Math.random() < 0.01;
      return { ...state, showNPSSurvey };
  }
}

export default app;