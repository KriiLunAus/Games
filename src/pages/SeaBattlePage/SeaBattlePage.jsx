import { useEffect, useState } from 'react';
import css from './SeaBattlePage.module.css';
import Board from '../../components/Board/Board';
import { messages } from '../../utilits/messages';
import useWidth from '../../hooks/useWidth';

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
  const [enemyTargetCells, setEnemyTargetCells] = useState([]);
  const [enemyAttackDirection, setEnemyAttackDirection] = useState(null);

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
        const surrounding = getTargetedCells(ship, 10);
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
        let targetCellId;

        if (enemyTargetCells.length > 0) {
          targetCellId = enemyTargetCells[0];
          setEnemyTargetCells(prev => prev.slice(1));
        } else {
          targetCellId = getRandomCellId(playerBoardActiveCells);
        }

        if (!playerBoardActiveCells.includes(targetCellId)) {
          const newActiveCells = [...playerBoardActiveCells, targetCellId];
          setPlayerBoardActiveCells(newActiveCells);

          const hitShip = playerShipsCells.find(ship =>
            ship.includes(targetCellId)
          );

          if (hitShip) {
            const adjacentCells = getTargetedCells(
              [targetCellId],
              10,
              true
            ).filter(
              cell =>
                !newActiveCells.includes(cell) &&
                !enemyTargetCells.includes(cell)
            );
            setEnemyTargetCells(prev => [...prev, ...adjacentCells]);

            if (enemyTargetCells.length > 1 && !enemyAttackDirection) {
              const secondHit = enemyTargetCells[0];

              const isHorizontal = Math.abs(targetCellId - secondHit) === 1;
              const isVertical = Math.abs(targetCellId - secondHit) === 10;

              if (isHorizontal) {
                setEnemyAttackDirection('horizontal');
              } else if (isVertical) {
                setEnemyAttackDirection('vertical');
              }

              const directionCells = getDirectionalCells(
                targetCellId,
                enemyAttackDirection,
                10
              );

              setEnemyTargetCells(prev => [...prev, ...directionCells]);
            }
          }

          const destroyedShips = playerShipsCells.filter(ship =>
            ship.every(cell => newActiveCells.includes(cell))
          );

          destroyedShips.forEach(ship => {
            const surrounding = getTargetedCells(ship, 10);
            setPlayerBoardActiveCells(prev => [...prev, ...surrounding]);
          });

          if (destroyedShips.some(ship => ship.includes(targetCellId))) {
            setEnemyAttackDirection(null);
            setEnemyTargetCells([]);
          }

          if (destroyedShips.length === playerShipsCells.length) {
            setResult('lose');
          }

          setTurn('player');
        }
      }, 250);
    }
  }, [
    turn,
    playerBoardActiveCells,
    playerShipsCells,
    enemyTargetCells,
    enemyAttackDirection,
  ]);
  const vw = useWidth();

  return (
    <div className={css.boardsWrapper}>
      {vw > 1024 && <h2 className={css.seaBattleHeader}>Sea Battle</h2>}
      {result !== '' && (
        <div className={css.newGameSetup}>
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
            <h3 className={css.result}>
              You destroyed all enemy ships. Congratulations!!!{' '}
            </h3>
          )}
          {result === 'lose' && (
            <h3 className={css.result}>
              Enemy destroyed all your ships. Good luck next time!{' '}
            </h3>
          )}
        </div>
      )}
      {!isPlaceFleet && result === '' && (
        <div>
          <button
            onClick={() => {
              setIsPlaceFleet(true);
            }}
            className={css.placeFleet}
          >
            Place Fleet
          </button>
        </div>
      )}

      {isPlaceFleet && (
        <div className={css.playerBoardWrapper}>
          {!isStartTheGame && (
            <h3 className={css.placeFleetHeader}>Place your fleet</h3>
          )}
          {isStartTheGame && <h2 className={css.playerHeader}>Player Board</h2>}
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
      {alreadyHit && <div className={css.message}>{messages.already_hit}</div>}
      {isStartTheGame && turn === 'player' && (
        <div className={css.message}>{messages.your_turn}</div>
      )}
      {turn === 'enemy' && (
        <div className={css.message}>{messages.computer}</div>
      )}

      {isStartTheGame && (
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

function getTargetedCells(shipCells, gridSize, onlyCardinal = false) {
  const directions = onlyCardinal
    ? [
        { row: 0, col: -1 },
        { row: 1, col: 0 },
        { row: -1, col: 0 },
        { row: 0, col: 1 },
      ]
    : [
        { row: -1, col: 0 },
        { row: 1, col: 0 },
        { row: 0, col: -1 },
        { row: 0, col: 1 },
        { row: -1, col: -1 },
        { row: -1, col: 1 },
        { row: 1, col: -1 },
        { row: 1, col: 1 },
      ];

  return shipCells.flatMap(cell => {
    const row = Math.floor(cell / gridSize);
    const col = cell % gridSize;

    return directions
      .map(({ row: dRow, col: dCol }) => {
        const newRow = row + dRow;
        const newCol = col + dCol;
        const newCell = newRow * gridSize + newCol;

        return newRow >= 0 &&
          newRow < gridSize &&
          newCol >= 0 &&
          newCol < gridSize
          ? newCell
          : null;
      })
      .filter(cell => cell !== null);
  });
}
function getRandomCellId(playerBoardActiveCells) {
  let randomId;
  do {
    randomId = Math.floor(Math.random() * 100);
  } while (playerBoardActiveCells.includes(randomId));
  return randomId;
}

function getDirectionalCells(startCell, direction, gridSize) {
  const row = Math.floor(startCell / gridSize);
  const col = startCell % gridSize;

  const directions = {
    horizontal: [
      { row: 0, col: -1 },
      { row: 0, col: 1 },
    ],
    vertical: [
      { row: -1, col: 0 },
      { row: 1, col: 0 },
    ],
  };

  return directions[direction]
    .map(({ row: dRow, col: dCol }) => {
      const newRow = row + dRow;
      const newCol = col + dCol;
      const newCell = newRow * gridSize + newCol;

      return newRow >= 0 &&
        newRow < gridSize &&
        newCol >= 0 &&
        newCol < gridSize
        ? newCell
        : null;
    })
    .filter(cell => cell !== null);
}
