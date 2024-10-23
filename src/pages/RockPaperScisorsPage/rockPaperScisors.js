export default function playGame(playerMove, setResult) {
  const computerMove = pickComputerMove();

  setResult(prevResult => {
    const newScore = { ...prevResult.score };

    let winner = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        newScore.loses += 1;
        winner = 'Machine';
      } else if (computerMove === 'paper') {
        newScore.wins += 1;
        winner = 'Username';
      } else {
        newScore.ties += 1;
        winner = 'Tie';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        newScore.wins += 1;
        winner = 'Username';
      } else if (computerMove === 'paper') {
        newScore.ties += 1;
        winner = 'Tie';
      } else {
        newScore.loses += 1;
        winner = 'Machine';
      }
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        newScore.ties += 1;
        winner = 'Tie';
      } else if (computerMove === 'paper') {
        newScore.loses += 1;
        winner = 'Machine';
      } else {
        newScore.wins += 1;
        winner = 'Username';
      }
    }

    return {
      score: newScore,
      moves: {
        computerMove,
        playerMove,
      },
      winner,
    };
  });
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
