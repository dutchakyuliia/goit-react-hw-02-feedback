import React, { Component } from 'react';
// import css from './FeedbackOptions.module.css';
class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        <button  onClick={this.props.onLeaveFeedback('good')}>Good</button>
        <button onClick={this.props.onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={this.props.onLeaveFeedback('bad')}>Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
