export default function playGame(playerMove, setResult) {
  const computerMove = pickComputerMove();

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      setResult(prevResult => ({
        loses: prevResult.loses + 1,
        wins: prevResult.wins + 0,
        ties: prevResult.ties + 0,
        computerMove,
      }));
    } else if (computerMove === 'paper') {
      setResult(prevResult => ({
        loses: prevResult.loses + 0,
        wins: prevResult.wins + 1,
        ties: prevResult.ties + 0,
        computerMove,
      }));
    } else if (computerMove === 'scissors') {
      setResult(prevResult => ({
        loses: prevResult.loses + 0,
        wins: prevResult.wins + 0,
        ties: prevResult.ties + 1,
        computerMove,
      }));
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      setResult(prevResult => ({
        loses: prevResult.loses + 0,
        wins: prevResult.wins + 1,
        ties: prevResult.ties + 0,
        computerMove,
      }));
    } else if (computerMove === 'paper') {
      setResult(prevResult => ({
        loses: prevResult.loses + 0,
        wins: prevResult.wins + 0,
        ties: prevResult.ties + 1,
        computerMove,
      }));
    } else if (computerMove === 'scissors') {
      setResult(prevResult => ({
        loses: prevResult.loses + 1,
        wins: prevResult.wins + 0,
        ties: prevResult.ties + 0,
        computerMove,
      }));
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      setResult(prevResult => ({
        loses: prevResult.loses + 0,
        wins: prevResult.wins + 0,
        ties: prevResult.ties + 1,
        computerMove,
      }));
    } else if (computerMove === 'paper') {
      setResult(prevResult => ({
        loses: prevResult.loses + 1,
        wins: prevResult.wins + 0,
        ties: prevResult.ties + 0,
        computerMove,
      }));
    } else if (computerMove === 'scissors') {
      setResult(prevResult => ({
        loses: prevResult.loses + 0,
        wins: prevResult.wins + 1,
        ties: prevResult.ties + 0,
        computerMove,
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
