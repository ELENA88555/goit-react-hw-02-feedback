import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            className={css.btn}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};


