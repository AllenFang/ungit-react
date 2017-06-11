import React, { Component, PropTypes } from 'react';

class GitVersionError extends Component {
  static propTypes = {
    gitVersionError: PropTypes.string
  }

  render() {
    return (
      <div class="alert alert-danger">
        <span>{ this.props.gitVersionError }</span>
        <button type="button" className="close" data-bind="click: dismissGitVersionError">&times;</button>
      </div>
    );
  }
}

export default GitVersionError;