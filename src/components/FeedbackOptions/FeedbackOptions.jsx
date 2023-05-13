import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired 
};
