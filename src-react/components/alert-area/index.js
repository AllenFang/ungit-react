import React, { Component, PropTypes } from 'react';

import GitVersionError from './git-version-error';
import NewVersionAvailable from './new-version-available';
import BugTrackingNagScreen from './bug-tracking-nag-screen';
import NPSSurvey from './nps-survey';

class AlertArea extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired, 
    config: PropTypes.object.isRequired,
    gitVersionErrorVisible: PropTypes.bool.isRequired,
    showNewVersionAvailable: PropTypes.bool.isRequired,
    showBugtrackingNagscreen: PropTypes.bool.isRequired,
    showNPSSurvey: PropTypes.bool.isRequired
  }

  render() {
    const {
      actions,
      config: {
        ungitConfig: { platform },
        versions: {
          gitVersion: { error },
          latestVersion: {
            latestVersion
          }
        }
      },
      gitVersionErrorVisible,
      showNewVersionAvailable,
      showBugtrackingNagscreen,
      showNPSSurvey
    } = this.props;
    return (
      <div className="container" data-ta-container="app">
        {
          gitVersionErrorVisible ? (
            <GitVersionError gitVersionError={ error } onDismiss={ actions.dismissGitVersionError }/>
          ) : null
        }
        {
          showNewVersionAvailable ? (
            <NewVersionAvailable
              latestVersion={ latestVersion }
              platform={ platform }
              onDismiss={ actions.dismissNewVersion }/>
          ) : null
        }
        {
          showBugtrackingNagscreen ? (
            <BugTrackingNagScreen />
          ) : null
        }
        {
          showNPSSurvey ? (
            <NPSSurvey />
          ) : null
        }
      </div>
    );
  }
}

export default AlertArea;