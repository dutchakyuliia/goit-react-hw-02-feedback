import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statictics/Statictics';
import Section from './Section/Section';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = name => () => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleClick}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
