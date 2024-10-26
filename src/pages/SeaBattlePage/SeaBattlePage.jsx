import css from './SeaBattlePage.module.css';
import Board from '../../components/Board/Board';

export default function SeaBattlePage() {
  const handleCellClick = cellId => {
    console.log(`Cell clicked: ${cellId}`);
    // Handle game logic here
  };

  return (
    <div className={css.boardsWrapper}>
      <div>
        <Board onCellClick={handleCellClick} />
        <h2>Player Board</h2>
      </div>
      <div>
        <Board onCellClick={handleCellClick} />
        <h2>Enemy Board</h2>
      </div>
    </div>
  );
}
