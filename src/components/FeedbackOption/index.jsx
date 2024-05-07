import s from './FeedbackOption.module.css';
import emoji from 'emoji-db.json';

function FeedbackOptions({ options, optionHandler }) {
  return (
    <div className={s.feedbackOptions}>
      {options.map(el => {
        return (
          <button
            key={el}
            type="button"
            name={el}
            className={s.option}
            onClick={optionHandler}
          >
            <span className={s.emoji}>{emoji[el]}</span> {el}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;
