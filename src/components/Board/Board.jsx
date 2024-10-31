import css from './Board.module.css';
import clsx from 'clsx';
import { ships } from '../../utilits/Ships.js';

export default function Board({ onCellClick, activeCells }) {
  const renderCells = () => {
    const cells = [];

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
  return (
    <>
      <div className={css.board}>{renderCells()}</div>
      <div>{renderShips(ships)}</div>
    </>
  );
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

function renderShips(ships) {
  const shipsArr = [];
  ships.forEach(ship => {
    shipsArr.push(
      <div
        style={{
          width: '30px',
          height: `${ship.shipHeight * 30}px `,
          backgroundColor: 'red',
        }}
      ></div>
    );
  });
  return shipsArr;
}
