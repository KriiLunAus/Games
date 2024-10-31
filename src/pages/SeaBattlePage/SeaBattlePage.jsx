import { useState } from 'react';
import css from './SeaBattlePage.module.css';
import Board from '../../components/Board/Board';
export default function SeaBattlePage() {
  const [activeCells, setActiveCells] = useState([]);

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
        <Board onCellClick={handleCellClick} activeCells={activeCells} />
        <h2>Player Board</h2>
      </div>
      {/* <div>
        <Board onCellClick={handleCellClick} activeCells={activeCells} />
        <h2>Enemy Board</h2>
      </div> */}
    </div>
  );
}
