import { useEffect, useState } from 'react';
import css from './SeaBattlePage.module.css';
import Board from '../../components/Board/Board';
import { messages } from '../../utilits/messages';
export default function SeaBattlePage() {
  const [playerBoardActiveCells, setPlayerBoardActiveCells] = useState([]);
  const [enemyBoardActiveCells, setEnemyBoardActiveCells] = useState([]);
  const [playerShipsCells, setPlayerShipsCells] = useState([]);
  const [enemyShipsCells, setEnemyShipsCells] = useState([]);
  const [isPlaceFleet, setIsPlaceFleet] = useState(false);
  const [isStartTheGame, setIsStartTheGame] = useState(false);
  const [turn, setTurn] = useState('player');
  const [alreadyHit, setAlreadyHit] = useState(false);
  const [result, setResult] = useState('');

  console.log(getSurroundingCells(enemyShipsCells, 10));

  const handlePlayerClick = (cellId, isEnemy) => {
    if (isEnemy && turn === 'player') {
      if (enemyBoardActiveCells.includes(cellId)) {
        setAlreadyHit(true);
        return;
      }

      const newActiveCells = [...enemyBoardActiveCells, cellId];
      setEnemyBoardActiveCells(newActiveCells);

      const destroyedShips = enemyShipsCells.filter(ship =>
        ship.every(cell => newActiveCells.includes(cell))
      );

      destroyedShips.forEach(ship => {
        const surrounding = getSurroundingCells(ship, 10);
        setEnemyBoardActiveCells(prev => [...prev, ...surrounding]);
      });

      if (destroyedShips.length === enemyShipsCells.length) {
        setResult('win');
      }

      setAlreadyHit(false);
      setTurn('enemy');
    }
  };

  useEffect(() => {
    if (turn === 'enemy') {
      setTimeout(() => {
        const randomCellId = getRandomCellId(playerBoardActiveCells);
        if (!playerBoardActiveCells.includes(randomCellId)) {
          const newActiveCells = [...playerBoardActiveCells, randomCellId];
          setPlayerBoardActiveCells(newActiveCells);

          const destroyedShips = playerShipsCells.filter(ship =>
            ship.every(cell => newActiveCells.includes(cell))
          );

          destroyedShips.forEach(ship => {
            const surrounding = getSurroundingCells(ship, 10);
            setPlayerBoardActiveCells(prev => [...prev, ...surrounding]);
          });

          if (destroyedShips.length === playerShipsCells.length) {
            setResult('lose');
          }

          setTurn('player');
        }
      }, 1000);
    }
  }, [turn, playerBoardActiveCells, playerShipsCells]);
  return (
    <div className={css.boardsWrapper}>
      <h2 className={css.seaBattleHeader}>Sea Battle</h2>
      {result !== '' && (
        <button
          className={css.newGameBtn}
          onClick={() => {
            setResult('');
            setTurn('player');
            setIsPlaceFleet(false);
            setIsStartTheGame(false);
            setPlayerBoardActiveCells([]);
            setEnemyBoardActiveCells([]);
          }}
        >
          New game
        </button>
      )}
      {result === 'win' && (
        <h3>You destroyed all enemy ships. Congratulations!!! </h3>
      )}
      {result === 'lose' && (
        <h3>Enemy destroyed all your ships. Good luck next time! </h3>
      )}
      <div>
        {!isPlaceFleet && result === '' && (
          <button
            onClick={() => {
              setIsPlaceFleet(true);
            }}
            className={css.placeFleet}
          >
            Place Fleet
          </button>
        )}
      </div>

      {isPlaceFleet && result === '' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!isStartTheGame && result === '' && (
            <h3 className={css.placeFleetHeader}>Place your fleet</h3>
          )}
          {isStartTheGame && result === '' && (
            <h2 className={css.playerHeader}>Player Board</h2>
          )}
          <Board
            activeCells={playerBoardActiveCells}
            isStartTheGame={isStartTheGame}
            isEnemy={false}
            turn={turn}
            setShipsCells={setPlayerShipsCells}
          />
          {!isStartTheGame && (
            <button
              className={css.startBtn}
              onClick={() => {
                setIsStartTheGame(true);
              }}
            >
              Start
            </button>
          )}
        </div>
      )}
      {alreadyHit && result === '' && (
        <div className={css.message}>{messages.already_hit}</div>
      )}
      {isStartTheGame && result === '' && turn === 'player' && (
        <div className={css.message}>{messages.your_turn}</div>
      )}
      {turn === 'enemy' && (
        <div className={css.message}>{messages.computer}</div>
      )}

      {isStartTheGame && result === '' && (
        <div>
          <Board
            onCellClick={handlePlayerClick}
            activeCells={enemyBoardActiveCells}
            isStartTheGame={isStartTheGame}
            isEnemy={true}
            turn={turn}
            setShipsCells={setEnemyShipsCells}
          />
          <h2 className={css.playerHeader}>Enemy Board</h2>
        </div>
      )}
    </div>
  );
}

function getSurroundingCells(shipCells, gridSize) {
  const surroundingCells = new Set();

  shipCells.forEach(cell => {
    const row = Math.floor(cell / gridSize);
    const col = cell % gridSize;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newRow = row + i;
        const newCol = col + j;
        const newCell = newRow * gridSize + newCol;

        if (
          newRow >= 0 &&
          newRow < gridSize &&
          newCol >= 0 &&
          newCol < gridSize &&
          !shipCells.includes(newCell)
        ) {
          surroundingCells.add(newCell);
        }
      }
    }
  });

  return Array.from(surroundingCells);
}

function getRandomCellId(playerBoardActiveCells) {
  let randomId;
  do {
    randomId = Math.floor(Math.random() * 100);
  } while (playerBoardActiveCells.includes(randomId));
  return randomId;
}
