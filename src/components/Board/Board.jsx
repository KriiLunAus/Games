import { useEffect, useState } from 'react';
import css from './Board.module.css';
import clsx from 'clsx';
import { ships } from '../../utilits/Ships.js';

export default function Board({
  onCellClick,
  activeCells,
  isStartTheGame,
  isEnemy,
  checkIfHit,
  turn,
}) {
  const gridSize = 10;
  const [grid, setGrid] = useState(
    Array.from({ length: gridSize }, () => Array(gridSize).fill(0))
  );
  useEffect(() => {
    if (isEnemy) {
      setGrid(placeShips());
    }
  }, [isEnemy, isStartTheGame]);

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
            onClick={cellId => {
              onCellClick(cellId, isEnemy);
            }}
            isActive={activeCells.includes(id)}
            isShipPart={isShipPart}
            isEnemy={isEnemy}
            turn={turn}
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
        if (isEnemy || !isEnemy) {
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
