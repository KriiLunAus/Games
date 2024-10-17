import css from './flipTheCoinPage.module.css';
import { useState } from 'react';

export default function FlipTheCoinPage() {
  const [result, setResult] = useState(null);

  function playGame() {
    setResult(Math.random());
  }

  return (
    <section className={css.container}>
      <h1>flip the coin</h1>

      <div id="js-result">
        {result === null
          ? 'Chose your side'
          : result < 0.5
          ? 'You win!!'
          : 'You lose!!'}
      </div>
      <button onClick={playGame}>heads</button>
      <button onClick={playGame}>tales</button>
    </section>
  );
}
