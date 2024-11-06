import { useEffect, useState } from 'react';
import css from './SeaBattlePage.module.css';
import Board from '../../components/Board/Board';
import { messages } from '../../utilits/messages';
export default function SeaBattlePage() {
  const [playerBoardActiveCells, setPlayerBoardActiveCells] = useState([]);
  const [enemyBoardActiveCells, setEnemyBoardActiveCells] = useState([]);
  const [isPlaceFleet, setIsPlaceFleet] = useState(false);
  const [isStartTheGame, setIsStartTheGame] = useState(false);
  const [turn, setTurn] = useState('player');
  const [alreadyHit, setAlreadyHit] = useState(false);

  const handlePlayerClick = (cellId, isEnemy) => {
    if (isEnemy && turn === 'player') {
      if (enemyBoardActiveCells.includes(cellId)) {
        setAlreadyHit(true);
        return;
      }
      setEnemyBoardActiveCells(prev =>
        prev.includes(cellId) ? prev : [...prev, cellId]
      );
      setAlreadyHit(false);
      setTurn('enemy');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (turn === 'enemy') {
        const randomCellId = getRandomCellId();
        if (!playerBoardActiveCells.includes(randomCellId)) {
          setPlayerBoardActiveCells(prev => [...prev, randomCellId]);
        }
        setTurn('player');
      }

      function getRandomCellId() {
        let randomId;
        console.log();

        do {
          randomId = Math.floor(Math.random() * 100);
        } while (playerBoardActiveCells.includes(randomId));
        return randomId;
      }
    }, 0);
  }, [turn, playerBoardActiveCells]);

  return (
    <div className={css.boardsWrapper}>
      <h2 className={css.seaBattleHeader}>Sea Battle</h2>
      <div>
        {!isPlaceFleet && (
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

      {isPlaceFleet && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!isStartTheGame && (
            <h3 className={css.placeFleetHeader}>Place your fleet</h3>
          )}
          {isStartTheGame && <h2 className={css.playerHeader}>Player Board</h2>}
          <Board
            activeCells={playerBoardActiveCells}
            isStartTheGame={isStartTheGame}
            isEnemy={false}
            turn={turn}
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
          />
          <h2 className={css.playerHeader}>Enemy Board</h2>
        </div>
      )}
    </div>
  );
}
