import css from './flipTheCoinPage.module.css';
import { useState } from 'react';
import Total from '../../components/Total/Total.jsx';

export default function FlipTheCoinPage() {
  const [result, setResult] = useState({
    wins: 0,
    loses: 0,
    side: null,
  });

  function playGame() {
    const randomMove = Math.floor(Math.random() * 2) === 0;
    setResult(prevResult => ({
      wins: prevResult.wins + (randomMove ? 1 : 0),
      loses: prevResult.loses + (!randomMove ? 1 : 0),
      side: randomMove ? 'Heads' : 'Tails',
    }));
  }

  return (
    <section className={css.container}>
      <h2>flip the coin</h2>
      <Total result={result} />

      <div id="js-result" className={css.result}>
        {result.side}
      </div>
      <div className={css.buttonWrapper}>
        <button onClick={playGame}>Heads</button>
        <button onClick={playGame}>Tales</button>
      </div>
    </section>
  );
}
