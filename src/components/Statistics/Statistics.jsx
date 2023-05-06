import React from 'react';
import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
      <ul className={css.itemList}>
      <li className={css.list}>
        <p className={css.nameOption}>
         Good:
          <span className={css.value}>{good}</span>
        </p>
      </li>
      <li className={css.list}>
        <p className={css.nameOption}>
        Neutral:
          <span className={css.value}>{neutral}</span>
        </p>
      </li>
      <li className={css.list}>
        <p className={css.nameOption}>
        Bad:
          <span className={css.value}>{bad}</span>
        </p>
      </li>
      <li className={css.list}>
        <p className={css.nameOption}>
        Total:
          <span className={css.value}>{total}</span>
        </p>
      </li>
      <li className={css.list}>
        <p className={css.nameOption}>
        PositivePercentage:
          <span className={css.value}>{positivePercentage}</span>
        </p>
      </li>
    </ul>
  );
};


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};




