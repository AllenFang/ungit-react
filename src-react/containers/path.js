import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import AlertArea from 'components/alert-area';
import * as bootstrapActionCreators from 'actions/bootstrap';
import 'styles/styles.scss';

@connect(state => { 
  return { ...state };
}, dispatch => {
  return { 
    actions: bindActionCreators(Object.assign({}, bootstrapActionCreators), dispatch) 
  };
})
class Path extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.bootstrap();
  }

  render() {
    const { path: { pending, errMessage }, app } = this.props;
    return (
      <div>
        <div className="app-top-margin"></div>
        <div className="app-wrapper">
          {
            pending === 0 && errMessage.length === 0 ? (
              <AlertArea config={ this.props.config }
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
