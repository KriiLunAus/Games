import { useState } from 'react';
import css from './SeaBattlePage.module.css';
import Board from '../../components/Board/Board';
export default function SeaBattlePage() {
  const [playerActiveCells, setPlayerActiveCells] = useState([]);
  const [enemyActiveCells, setEnemyActiveCells] = useState([]);
  const [isPlaceFleet, setIsPlaceFleet] = useState(false);
  const [isStartTheGame, setIsStartTheGame] = useState(false);

  const handleCellClick = (cellId, isOpponent) => {
    if (isOpponent) {
      setEnemyActiveCells(prev =>
        prev.includes(cellId)
          ? prev.filter(id => id !== cellId)
          : [...prev, cellId]
      );
    } else {
      setPlayerActiveCells(prev =>
        prev.includes(cellId)
          ? prev.filter(id => id !== cellId)
          : [...prev, cellId]
      );
    }
  };

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
          <Board
            onCellClick={handleCellClick}
            activeCells={playerActiveCells}
            isStartTheGame={isStartTheGame}
            isOpponent={false}
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
          {isStartTheGame && <h2 className={css.playerHeader}>Player Board</h2>}
        </div>
      )}
      {isStartTheGame && (
        <div>
          <Board
            onCellClick={handleCellClick}
            activeCells={enemyActiveCells}
            isStartTheGame={isStartTheGame}
            isOpponent={true}
          />
          <h2 className={css.playerHeader}>Enemy Board</h2>
        </div>
      )}
    </div>
  );
}
