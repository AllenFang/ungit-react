import React, { Component, PropTypes } from 'react';

class NewVersionAvailable extends Component {
  static propTypes = {
    latestVersion: PropTypes.string,
    platform: PropTypes.string
  }

  render() {
    const newVersionInstallCommand = `#{this.props.platform ? '' : 'sudo -H'}npm update -g ungit`;
    return (
      <div className="alert alert-info">
        A new version of ungit (<span>{ this.props.latestVersion }</span>) is
        <a href="https://github.com/FredrikNoren/ungit">available</a>! Run
        <code>{ newVersionInstallCommand }</code> to install.
        See what's new in the
        <a href="https://github.com/FredrikNoren/ungit/blob/master/CHANGELOG.md">changelog</a>.
        <button type="button" className="close" data-bind="click: dismissNewVersion">&times;</button>
      </div>
    );
  }
}

export default NewVersionAvailable;