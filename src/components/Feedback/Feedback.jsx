import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  static defaultProps = {};
  static propTypes = {};

  handleClick = name => () => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const {
      state: { good, neutral, bad },
    } = this;
    return (
      <div>
        <p>Please leave feedback</p>
        <button onClick={this.handleClick('good')}>Good</button>
        <button onClick={this.handleClick('neutral')}>Neutral</button>
        <button onClick={this.handleClick('bad')}>Bad</button>
        <p>Statistics</p>
        <ul>
          <li>Good : {good}</li>
          <li>Neutral : {neutral}</li>
          <li>Bad : {bad}</li>
          <li>Total : {good + neutral + bad}</li>
          <li>
            Positive feedback :{' '}
            {Math.round((100 * good) / (good + neutral + bad)) || 0} %
          </li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
