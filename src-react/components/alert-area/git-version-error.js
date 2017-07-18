import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
class GitVersionError extends Component {
  static propTypes = {
    gitVersionError: PropTypes.string,
    onDismiss: PropTypes.func.isRequired
  }

  render() {
    const { gitVersionError, onDismiss } = this.props;
    return (
      <div className="alert alert-danger">
        <span>{ gitVersionError }</span>
        <button type="button" className="close" onClick={ () => onDismiss() }>&times;</button>
      </div>
    );
  }
}

export default GitVersionError;