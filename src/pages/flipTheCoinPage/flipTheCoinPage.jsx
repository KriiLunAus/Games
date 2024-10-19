import css from './flipTheCoinPage.module.css';
import { useState } from 'react';

export default function FlipTheCoinPage() {
  const [result, setResult] = useState(null);

  function playGame() {
    setResult(Math.random());
  }
  return (
    <section className={css.container}>
      <h2>flip the coin</h2>

      <div id="js-result" className={css.result}>
        {result === null
          ? 'Chose your coin side !!!'
          : result < 0.5
          ? 'You win!!'
          : 'You lose!!'}
      </div>
      <div>total</div>
      <div className={css.buttonWrapper}>
        <button onClick={playGame}>Heads</button>
        <button onClick={playGame}>Tales</button>
      </div>
    </section>
  );
}
