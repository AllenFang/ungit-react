import React, { Component } from 'react';
import { connect } from 'react-redux'

@connect(state => { return { ...state } })
class Path extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to { this.props.app }</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/container/Path.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Path;
