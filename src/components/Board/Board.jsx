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
