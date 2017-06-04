import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as ungitConfigActionCreators from 'actions/ungit-config';
import 'styles/styles.scss';

@connect(state => { 
  return { ...state };
}, dispatch => {
  return { 
    actions: bindActionCreators(Object.assign({}, ungitConfigActionCreators), dispatch) 
  };
})
class Path extends Component {

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchUngitConfig();
  }

  render() {
    return (
      <div>
        <div className="app-top-margin"></div>
        <div className="app-wrapper">
          <div className="container" data-bind="shown: shown" data-ta-container="app">
          </div>
        </div>
      </div>
    );
  }
}

export default Path;
