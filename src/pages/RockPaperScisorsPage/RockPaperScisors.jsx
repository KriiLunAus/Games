import css from './RockPaperScisors.module.css';
import { useState } from 'react';
import Total from '../../components/Total/Total.jsx';

export default function RockPaperScisorsPage() {
  const [result, setResult] = useState({
    wins: 0,
    loses: 0,
    ties: 0,
    cm: '',
  });

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        setResult(prevResult => ({
          loses: prevResult.loses + 1,
          wins: prevResult.wins + 0,
          ties: prevResult.ties + 0,
          cm: computerMove,
        }));
      } else if (computerMove === 'paper') {
        setResult(prevResult => ({
          loses: prevResult.loses + 0,
          wins: prevResult.wins + 1,
          ties: prevResult.ties + 0,
          cm: computerMove,
        }));
      } else if (computerMove === 'scissors') {
        setResult(prevResult => ({
          loses: prevResult.loses + 0,
          wins: prevResult.wins + 0,
          ties: prevResult.ties + 1,
          cm: computerMove,
        }));
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        setResult(prevResult => ({
          loses: prevResult.loses + 0,
          wins: prevResult.wins + 1,
          ties: prevResult.ties + 0,
          cm: computerMove,
        }));
      } else if (computerMove === 'paper') {
        setResult(prevResult => ({
          loses: prevResult.loses + 0,
          wins: prevResult.wins + 0,
          ties: prevResult.ties + 1,
          cm: computerMove,
        }));
      } else if (computerMove === 'scissors') {
        setResult(prevResult => ({
          loses: prevResult.loses + 1,
          wins: prevResult.wins + 0,
          ties: prevResult.ties + 0,
          cm: computerMove,
        }));
      }
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        setResult(prevResult => ({
          loses: prevResult.loses + 0,
          wins: prevResult.wins + 0,
          ties: prevResult.ties + 1,
          cm: computerMove,
        }));
      } else if (computerMove === 'paper') {
        setResult(prevResult => ({
          loses: prevResult.loses + 1,
          wins: prevResult.wins + 0,
          ties: prevResult.ties + 0,
          cm: computerMove,
        }));
      } else if (computerMove === 'scissors') {
        setResult(prevResult => ({
          loses: prevResult.loses + 0,
          wins: prevResult.wins + 1,
          ties: prevResult.ties + 0,
          cm: computerMove,
        }));
      }
    }
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }

  return (
    <section className={css.container}>
      <h2>Rock Paper Scisors</h2>

      <Total result={result} quantity={3} />

      <div>{result.cmе}</div>

      <ul className={css.buttonWrapper}>
        <li>
          <button
            onClick={() => {
              playGame('rock');
            }}
          >
            Rock
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              playGame('paper');
            }}
          >
            Paper
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              playGame('scsisors');
            }}
          >
            Scisors
          </button>
        </li>
      </ul>
    </section>
  );
}
