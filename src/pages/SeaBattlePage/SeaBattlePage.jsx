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

  const handlePlayerClick = (cellId, isEnemy) => {
    if (isEnemy && turn === 'player') {
      if (enemyBoardActiveCells.includes(cellId)) {
        setAlreadyHit(true);
        return;
      }
      if (checkIfAllHitted(playerBoardActiveCells, playerShipsCells)) {
        setResult('lose');
      }
      setEnemyBoardActiveCells(prev =>
        prev.includes(cellId) ? prev : [...prev, cellId]
      );
      setAlreadyHit(false);
      setTurn('enemy');
    }
  };

  function handleNewGame() {
    setResult('');
    setTurn('player');
    setIsPlaceFleet(false);
    setIsStartTheGame(false);
    setPlayerBoardActiveCells([]);
    setEnemyBoardActiveCells([]);
  }

  useEffect(() => {
    setTimeout(() => {
      if (turn === 'enemy') {
        const randomCellId = getRandomCellId();
        if (!playerBoardActiveCells.includes(randomCellId)) {
          setPlayerBoardActiveCells(prev => [...prev, randomCellId]);
        }
        if (checkIfAllHitted(enemyBoardActiveCells, enemyShipsCells)) {
          setResult('win');
        }
        setTurn('player');
      }

      function getRandomCellId() {
        let randomId;
        do {
          randomId = Math.floor(Math.random() * 100);
        } while (playerBoardActiveCells.includes(randomId));
        return randomId;
      }
    }, 0);
  }, [turn, playerBoardActiveCells, enemyBoardActiveCells, enemyShipsCells]);

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

function checkIfAllHitted(activeCells, shipsCells) {
  return shipsCells.every(ship => activeCells.includes(ship));
}
