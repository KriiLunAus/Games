import { useState } from 'react';
import css from './SeaBattlePage.module.css';
import Board from '../../components/Board/Board';
export default function SeaBattlePage() {
  const [activeCells, setActiveCells] = useState([]);
  const [isPlaceFleet, setIsPlaceFleet] = useState(false);
  const [isStartTheGame, setIsStartTheGame] = useState(false);
  const handleCellClick = cellId => {
    setActiveCells(prev =>
      prev.includes(cellId)
        ? prev.filter(id => id !== cellId)
        : [...prev, cellId]
    );
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
            <h2 style={{ marginBottom: '40px' }}>Place your fleet</h2>
          )}
          <Board
            onCellClick={handleCellClick}
            activeCells={activeCells}
            isStartTheGame={isStartTheGame}
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
          {isStartTheGame && <h2>Player Board</h2>}
        </div>
      )}
      {isStartTheGame && (
        <div>
          <Board
            onCellClick={handleCellClick}
            activeCells={activeCells}
            isStartTheGame={isStartTheGame}
          />
          <h2>Enemy Board</h2>
        </div>
      )}
    </div>
  );
}
