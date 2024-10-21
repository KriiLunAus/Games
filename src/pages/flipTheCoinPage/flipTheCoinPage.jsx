import css from './flipTheCoinPage.module.css';
import { useState } from 'react';
import Total from '../../components/Total/Total.jsx';
import heads from '../../images/svg/coinHeads.svg';
import tails from '../../images/svg/coinTails.svg';

export default function FlipTheCoinPage() {
  const [result, setResult] = useState({
    wins: 0,
    loses: 0,
    side: null,
  });

  function playGame(playerMove) {
    const randomMove = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
    const isWin = playerMove === randomMove;

    setResult(prevResult => ({
      wins: prevResult.wins + (isWin ? 1 : 0),
      loses: prevResult.loses + (!isWin ? 1 : 0),
      side: randomMove,
    }));
  }
  return (
    <section className={css.container}>
      <h2>flip the coin</h2>
      <Total result={result} quantity={result.quantity} />

      <div id="js-result" className={css.result}>
        {result.side === 'heads' ? (
          <img width={200} height={200} src={heads} alt="" />
        ) : result.side === 'tails' ? (
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
          Tales
        </button>
      </div>
    </section>
  );
}
