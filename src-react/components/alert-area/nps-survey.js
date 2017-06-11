import React, { Component } from 'react';

class NPSSurvey extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="alert alert-info clearfix" data-bind="visible: showNPSSurvey">
        <button type="button" className="close" data-bind="click: dismissNPSSurvey">&times;</button>
        <span className="text-dimmed">Hi! This is a one-question survey to learn more about how people use Ungit. You can dismiss it by clicking the x in the upper right corner.</span>
        <p><h4>Question: How likely are you to recommend Ungit to your friends and colleagues?</h4></p>
        <p>
          <div className="btn-group btn-group-justified">
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 0)">0</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 1)">1</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 2)">2</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 3)">3</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 4)">4</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 5)">5</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 6)">6</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 7)">7</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 8)">8</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 9)">9</a>
            <a className="btn btn-default" role="button" data-bind="click: sendNPS.bind(null, 10)">10</a>
          </div>
          <div className="clearfix">
            Not at all likely
            <div className="pull-right">Extremely likely</div>
          </div>
        </p>
      </div>
    );
  }
}

export default NPSSurvey;