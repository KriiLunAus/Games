import css from './Board.module.css';

export default function Board({ onCellClick }) {
  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < 100; i++) {
      cells.push(<Cell key={i} id={i} onClick={onCellClick} />);
    }
    return cells;
  };
  return <div className={css.board}>{renderCells()}</div>;
}

function Cell({ onClick, id }) {
  return (
    <div className={css.cell} onClick={() => onClick(id)}>
      {/* You can add content here, like ship or hit markers */}
    </div>
  );
}

// 1(4 l), 2(3 l), 3(2 l), 4(1 l)

function Ships() {
  const ships = [
    {
      id: 1,
      length: 1,
      position: { startId: null, orientation: null },
      cells: [],
    },
    {
      id: 2,
      length: 2,
      position: { startId: null, orientation: null },
      cells: [],
    },
    {
      id: 3,
      length: 3,
      position: { startId: null, orientation: null },
      cells: [],
    },
    {
      id: 4,
      length: 4,
      position: { startId: null, orientation: null },
      cells: [],
    },
  ];
}
