import css from './Board.module.css';
import clsx from 'clsx';

export default function Board({ onCellClick, activeCells }) {
  const renderCells = () => {
    const cells = [];

    console.log(activeCells);
    for (let i = 0; i < 100; i++) {
      cells.push(
        <Cell
          key={i}
          id={i}
          onClick={onCellClick}
          isActive={activeCells.includes(i)}
        />
      );
    }
    return cells;
  };
  return <div className={css.board}>{renderCells()}</div>;
}

function Cell({ onClick, id, isActive }) {
  return (
    <div
      className={clsx(css.cell, isActive && css.active)}
      id={id}
      onClick={() => onClick(id)}
    >
      {}
    </div>
  );
}

// 1(4 l), 2(3 l), 3(2 l), 4(1 l)
