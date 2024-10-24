import { useState } from 'react';
import css from './CoinPage.module.css';
import Total from '../../components/Total/Total.jsx';
import heads from '../../images/svg/coinHeads.svg';
import tails from '../../images/svg/coinTails.svg';

export default function CoinPage() {
  const [result, setResult] = useState({
    score: {
      wins: 0,
      loses: 0,
      side: null,
    },
  });

  function playGame(playerMove) {
    const randomMove = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
    const isWin = playerMove === randomMove;

    setResult(prevResult => {
      const newScore = { ...prevResult.score };

      newScore.wins += isWin ? 1 : 0;
      newScore.loses += !isWin ? 1 : 0;
      newScore.side = randomMove;

      return {
        score: newScore,
      };
    });
  }

  return (
    <section className={css.container}>
      <h2>flip the coin</h2>
      <Total result={result} quantity={2} />

      <div id="js-result" className={css.result}>
        {result.score.side === 'heads' ? (
          <img width={200} height={200} src={heads} alt="" />
        ) : result.score.side === 'tails' ? (
          <img width={200} height={200} src={tails} alt="" />
        ) : (
          ''
        )}
      </div>

      <div className={css.buttonWrapper}>
        <button
          onClick={() => {
            playGame('heads');
          }}
          className="js-heads-btn"
        >
          Heads
        </button>
        <button
          onClick={() => {
            playGame('tails');
          }}
          className="js-tails-btn"
        >
          Tails
        </button>
      </div>
    </section>
  );
}
