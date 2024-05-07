import s from './App.module.css';

import { Component } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOption';
import Statistics from './Statictics';
import Diagram from './Diagram';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = e => {
    this.setState(prevState => {
      return { [e.target.name]: (prevState[e.target.name] += 1) };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  render() {
    console.log(this.countTotalFeedback());
    const options = Object.keys(this.state);
    return (
      <div className={s.container}>
        <h1 className="hidden">Cafe Espresso review page</h1>
        <div className={s.wrapper}>
          <Section title="Please, leave your vote" styleClass="FeedbackOptions">
            <FeedbackOptions
              options={options}
              optionHandler={this.onBtnClick}
            />
          </Section>

          <Section title="Statistics" styleClass="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                options={options}
                stateData={this.state}
                total={this.countTotalFeedback()}
              />
            ) : (
              <Notification message="No feedback is given yet" />
            )}
          </Section>
        </div>
        <Diagram
          options={options}
          stateData={this.state}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}

export { App };
