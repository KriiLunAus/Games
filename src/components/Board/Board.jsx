import { useEffect, useState } from 'react';
import css from './Board.module.css';
import clsx from 'clsx';
import { ships } from '../../utilits/Ships.js';

export default function Board({
  onCellClick,
  activeCells,
  isStartTheGame,
  isEnemy,
  setShipsCells,
}) {
  const gridSize = 10;
  const [grid, setGrid] = useState(
    Array.from({ length: gridSize }, () => Array(gridSize).fill(0))
  );

  useEffect(() => {
    const { newGrid, shipsCells } = placeShips(gridSize);

    if (isEnemy) {
      setGrid(newGrid);
      setShipsCells(shipsCells);
    }
  }, [isEnemy, isStartTheGame, setShipsCells]);

  return (
    <>
      <div className={css.board}>
        {renderCells(grid, gridSize, onCellClick, activeCells, isEnemy)}
      </div>
      {!isStartTheGame && (
        <button
          onClick={() => {
            const { newGrid, shipsCells } = placeShips(gridSize);

            setGrid(newGrid);
            setShipsCells(shipsCells);
          }}
          className={css.placeShipsBtn}
        >
          Place ships
        </button>
      )}
    </>
  );
}

function Cell({ onClick, id, isActive, isShipPart, isEnemy }) {
  return (
    <div
      className={clsx(
        css.cell,
        !isEnemy && isActive && css.active,
        !isEnemy && isShipPart && css.playerShip,
        isEnemy && isShipPart && css.enemyShip,
        isEnemy && isActive && css.active
      )}
      id={id}
      onClick={() => {
        if (isEnemy) {
          onClick(id);
        }
      }}
    >
      {}
      <div
        className={clsx(
          isEnemy && isShipPart && isActive && css.dead,
          !isEnemy && isShipPart && isActive && css.dead
        )}
      ></div>
    </div>
  );
}

function placeShips(gridSize) {
  const newGrid = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(0)
  );
  const shipsCells = [];

  ships.forEach(ship => {
    let placed = false;
    while (!placed) {
      const isHorizontal = Math.random() < 0.5;
      const x = Math.floor(Math.random() * gridSize);
      const y = Math.floor(Math.random() * gridSize);
      if (ship.canPlaceShip(newGrid, x, y, isHorizontal)) {
        const cells = ship.placeShip(newGrid, x, y, isHorizontal);
        shipsCells.push(...cells);
        placed = true;
      }
    }
  });

  return { newGrid, shipsCells };
}

function renderCells(grid, gridSize, onCellClick, activeCells, isEnemy) {
  const cells = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const id = row * gridSize + col;
      const isShipPart = grid[row][col] !== 0;
      cells.push(
        <Cell
          key={id}
          id={id}
          onClick={cellId => {
            onCellClick(cellId, isEnemy);
          }}
          isActive={activeCells.includes(id)}
          isShipPart={isShipPart}
          isEnemy={isEnemy}
          gridSize={gridSize}
        />
      );
    }
  }
  return cells;
}
