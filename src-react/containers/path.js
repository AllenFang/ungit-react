import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import AlertArea from 'components/alert-area';
import * as bootstrapActionCreators from 'actions/bootstrap';
import * as versionActionCreators from 'actions/version';
import 'styles/styles.scss';
@connect(state => { 
  return { ...state };
}, dispatch => {
  return { 
    actions: bindActionCreators(Object.assign({},
      bootstrapActionCreators, versionActionCreators), dispatch)
  };
})
class Path extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.bootstrap();
  }

  render() {
    const {
      app,
      path: { pending, errMessage },
      actions: {
        dismissGitVersionError,
        dismissNewVersion
      } } = this.props;
    const alertAreaActions = { dismissGitVersionError, dismissNewVersion };

    return (
      <div>
        <div className="app-top-margin"></div>
        <div className="app-wrapper">
          {
            pending === 0 && errMessage.length === 0 ? (
              <AlertArea config={ this.props.config }
                actions={ { ...alertAreaActions } }
                gitVersionErrorVisible={ app.gitVersionErrorVisible }
                showNewVersionAvailable={ app.showNewVersionAvailable }
                showBugtrackingNagscreen={ app.showBugtrackingNagscreen }
                showNPSSurvey={ app.showNPSSurvey } />
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default Path;
