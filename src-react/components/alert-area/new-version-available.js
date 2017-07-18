import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class NewVersionAvailable extends Component {
  static propTypes = {
    latestVersion: PropTypes.string,
    platform: PropTypes.string,
    onDismiss: PropTypes.func.isRequired
  }

  render() {
    const { platform, onDismiss } = this.props;
    return (
      <div className="alert alert-info">
        A new version of ungit (<span>{ this.props.latestVersion }</span>) is&nbsp;
        <a href="https://github.com/FredrikNoren/ungit">available</a>! Run
        <code>{ `${platform ? '' : 'sudo -H'} npm update -g ungit` }</code> to install.
        See what's new in the&nbsp;
        <a href="https://github.com/FredrikNoren/ungit/blob/master/CHANGELOG.md">changelog</a>.
        <button type="button" className="close" onClick={ () => onDismiss() }>&times;</button>
      </div>
    );
  }
}

export default NewVersionAvailable;