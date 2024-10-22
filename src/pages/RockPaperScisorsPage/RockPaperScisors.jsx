import css from './RockPaperScisors.module.css';
import { useState } from 'react';
import Total from '../../components/Total/Total.jsx';
import playGame from './rockPaperScisors.js';

export default function RockPaperScisorsPage() {
  const [result, setResult] = useState({
    wins: 0,
    loses: 0,
    ties: 0,
    computerMove: '',
  });

  console.log(result);
  return (
    <section className={css.container}>
      <h2>Rock Paper Scisors</h2>

      <Total result={result} quantity={3} />

      <div>{result.computerMove}</div>

      <ul className={css.buttonWrapper}>
        <li>
          <button
            onClick={() => {
              playGame('rock', setResult);
            }}
          >
            Rock
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              playGame('paper', setResult);
            }}
          >
            Paper
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              playGame('scissors', setResult);
            }}
          >
            Scisors
          </button>
        </li>
      </ul>
    </section>
  );
}
