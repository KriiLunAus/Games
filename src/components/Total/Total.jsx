import css from './Total.module.css';

export default function Total(result) {
  const { wins, loses, ties } = result.result;
  return (
    <>
      <ul className={css.totalList}>
        <li>
          <p>{`Wins : ${wins}`}</p>
        </li>
        <li>
          <p>{`Loses : ${loses}`}</p>
        </li>
        {result.quantity > 2 && (
          <li>
            <p>{`Ties: ${ties}`}</p>
          </li>
        )}
      </ul>
    </>
  );
}
