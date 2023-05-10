import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { ItemStat } from 'components/ItemStat/ItemStat';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.itemList}>
      <ItemStat ><p >Good:</p><span className = {css.value}>{good}</span></ItemStat>
      <ItemStat ><p >Neutral:</p><span className = {css.value}>{neutral}</span></ItemStat>
      <ItemStat ><p >Bad:</p><span className = {css.value}>{bad}</span></ItemStat>
      <ItemStat ><p >Total:</p><span className = {css.value}>{total}</span></ItemStat>
      <ItemStat ><p >Positive feedback:</p><span className = {css.value}>{positivePercentage}</span></ItemStat>
   
   
   
      {/* <li className = {css.nameOption}>Good: <span className = {css.value}>{good}</span> </li>
      <li className = {css.nameOption}>Neutral: <span className = {css.value}>{neutral}</span> </li>
      <li className = {css.nameOption}>Bad: <span className = {css.value}>{bad}</span> </li>
      <li className = {css.nameOption}>Total: <span className = {css.value}>{total}</span> </li>
      <li className = {css.nameOption}>Positive feedback: <span className = {css.value}>{positivePercentage}</span> </li> */}
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
