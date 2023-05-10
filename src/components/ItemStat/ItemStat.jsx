import css from './ItemStat.module.css';

export const ItemStat = ({ nameOption,children}) => {
  return (
    <li className={css.list}> {children}
      <p> <span>{nameOption}</span></p>
        </li>
  );
};
