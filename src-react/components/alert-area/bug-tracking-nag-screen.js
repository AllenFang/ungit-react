import React, { Component } from 'react';

class BugTrackingNagScreen extends Component {
  render() {
    return (
      <div className="alert alert-info clearfix">
        <button type="button" className="close" data-bind="click: dismissBugtrackingNagscreen">&times;</button>
        <p><strong>Help make ungit better with the press of a button!</strong></p>
        <button className="btn btn-primary" data-bind="click: enableBugtrackingAndStatistics">Enable automatic bug reports + anonymous usage statistics</button>
        <button className="btn btn-primary" data-bind="click: enableBugtracking">Enable automatic bug reports</button>
        <button className="btn btn-default" data-bind="click: dismissBugtrackingNagscreen">Naah, I&#39;ll skip that</button>
      </div>
    );
  }
}

export default BugTrackingNagScreen;