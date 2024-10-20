import css from './Total.module.css';

export default function Total(result) {
  return (
    <>
      <ul className={css.totalList}>
        <li>
          <p>{`Wins : ${result.result.wins}`}</p>
        </li>
        <li>
          <p>{`Loses : ${result.result.loses}`}</p>
        </li>
      </ul>
    </>
  );
}
