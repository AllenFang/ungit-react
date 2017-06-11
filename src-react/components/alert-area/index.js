import React, { Component, PropTypes } from 'react';

import GitVersionError from './git-version-error';
import NewVersionAvailable from './new-version-available';
import BugTrackingNagScreen from './bug-tracking-nag-screen';
import NPSSurvey from './nps-survey';

class AlertArea extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired,
    gitVersionErrorVisible: PropTypes.bool.isRequired,
    showNewVersionAvailable: PropTypes.bool.isRequired,
    showBugtrackingNagscreen: PropTypes.bool.isRequired,
    showNPSSurvey: PropTypes.bool.isRequired
  }

  render() {
    const {
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
            <GitVersionError gitVersionError={ error }/>
          ) : null
        }
        {
          showNewVersionAvailable ? (
            <NewVersionAvailable
              latestVersion={ latestVersion }
              platform={ platform }/>
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