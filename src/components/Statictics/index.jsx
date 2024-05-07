import s from './Statistics.module.css';

function Statistics({ options, stateData, total = 0 }) {
  return (
    <>
      {options.map(el => {
        return (
          <p key={el} className={s.text}>
            {el.charAt(0).toUpperCase() + el.slice(1)}:{' '}
            <span>{stateData[el]}</span>
          </p>
        );
      })}

      <p className={s.textTotal}>
        Total votes: <span>{total}</span>
      </p>
    </>
  );
}

export default Statistics;
