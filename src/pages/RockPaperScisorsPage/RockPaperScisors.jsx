import css from './RockPaperScisors.module.css';
import { useState } from 'react';
import Total from '../../components/Total/Total.jsx';
import playGame from './rockPaperScisors.js';

import GameResult from '../../components/GameResult/GameResult.jsx';
import useWidth from '../../hooks/useWidth.js';

export default function RockPaperScisorsPage() {
  const [result, setResult] = useState({
    score: {
      wins: 0,
      loses: 0,
      ties: 0,
    },
    moves: {
      computerMove: '',
      playerMove: '',
    },
    winner: '',
  });
  const vw = useWidth();
  return (
    <section className={css.container}>
      {vw > 1024 && <h2>Rock Paper Scissors</h2>}

      <Total result={result} quantity={3} />
      <GameResult result={result} />
      <ul className={css.buttonWrapper}>
        <li>
          <button
            onClick={() => {
              playGame('rock', setResult);
            }}
          >
            グー
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              playGame('paper', setResult);
            }}
          >
            パー
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              playGame('scissors', setResult);
            }}
          >
            チョキ
          </button>
        </li>
      </ul>
    </section>
  );
}
