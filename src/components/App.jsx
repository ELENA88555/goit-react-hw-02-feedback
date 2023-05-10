import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = event => {
    const nameBtm = event.currentTarget.name;
    console.log(event.target);
    if (nameBtm) {
      this.setState(prevState => ({ [nameBtm]: prevState[nameBtm] + 1 }));
    }
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, el) => acc + el, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const totalCounter = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let persentpage = 0;

    if (totalCounter > 0) {
      persentpage = Math.round((goodFeedback / totalCounter) * 100);
    }
    return `${persentpage}%`;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const handleClickBtn = this.handleClickBtn;
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <div className={css.mainContainer}>
        <div className={css.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={handleClickBtn}
            ></FeedbackOptions>
          </Section>

          <Section title="Statistics">
            {countTotalFeedback > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              ></Statistics>
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}
export default App;
