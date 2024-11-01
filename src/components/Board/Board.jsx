import { useState } from 'react';
import css from './Board.module.css';
import clsx from 'clsx';
import { ships } from '../../utilits/Ships.js';

export default function Board({ onCellClick, activeCells, isStartTheGame }) {
  const gridSize = 10;
  const [grid, setGrid] = useState(
    Array.from({ length: gridSize }, () => Array(gridSize).fill(0))
  );

  const placeShips = () => {
    const newGrid = Array.from({ length: gridSize }, () =>
      Array(gridSize).fill(0)
    );

    ships.forEach(ship => {
      let placed = false;
      while (!placed) {
        const isHorizontal = Math.random() < 0.5;
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        if (ship.canPlaceShip(newGrid, x, y, isHorizontal)) {
          ship.placeShip(newGrid, x, y, isHorizontal);
          placed = true;
        }
      }
    });

    return newGrid;
  };

  function renderCells() {
    const cells = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const id = row * gridSize + col;
        const isShipPart = grid[row][col] !== 0;
        cells.push(
          <Cell
            key={id}
            id={id}
            onClick={onCellClick}
            isActive={activeCells.includes(id)}
            isShipPart={isShipPart}
          />
        );
      }
    }
    return cells;
  }

  return (
    <>
      <div className={css.board}>{renderCells()}</div>
      {!isStartTheGame && (
        <button
          onClick={() => {
            setGrid(placeShips());
          }}
          className={css.placeShipsBtn}
        >
          Place ships
        </button>
      )}
    </>
  );
}

function Cell({ onClick, id, isActive, isShipPart }) {
  return (
    <div
      className={clsx(css.cell, isActive && css.active, isShipPart && css.ship)}
      id={id}
      onClick={() => onClick(id)}
    >
      {}
    </div>
  );
}
