import s from './App.module.css';

import { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOption';
import Statistics from './Statictics';
import Diagram from './Diagram';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const values = {
    good,
    neutral,
    bad,
  };

  const onBtnClick = e => {
    switch (e.target.name) {
      case 'good':
        return setGood(prev => prev + 1);

      case 'neutral':
        return setNeutral(prev => prev + 1);

      case 'bad':
        return setBad(prev => prev + 1);

      default:
    }
  };

  const countTotalFeedback = () => {
    return Object.values(values).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };

  const options = Object.keys(values);
  return (
    <div className={s.container}>
      <h1 className="hidden">Cafe Espresso review page</h1>
      <div className={s.wrapper}>
        <Section title="Please, leave your vote" styleClass="FeedbackOptions">
          <FeedbackOptions options={options} optionHandler={onBtnClick} />
        </Section>

        <Section title="Statistics" styleClass="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              options={options}
              stateData={values}
              total={countTotalFeedback()}
            />
          ) : (
            <Notification message="No feedback is given yet" />
          )}
        </Section>
      </div>
      <Diagram
        options={options}
        stateData={values}
        total={countTotalFeedback()}
      />
    </div>
  );
}

export { App };
