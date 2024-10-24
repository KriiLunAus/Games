import rock from '../../images/svg/rock.svg';
import paper from '../../images/svg/paper.svg';
import scissors from '../../images/svg/scissors.svg';
import css from './GameResult.module.css';
export default function GameResult(result) {
  const { computerMove, playerMove } = result.result.moves;
  const { winner } = result.result;
  const username = localStorage.getItem('username');

  return (
    <div className={css.gameResultWrapper}>
      <div>
        {playerMove === 'rock' ? (
          <img width={100} height={100} src={rock} alt="rock image" />
        ) : (
          ''
        )}
        {playerMove === 'paper' ? (
          <img width={100} height={100} src={paper} alt="paper image" />
        ) : (
          ''
        )}
        {playerMove === 'scissors' ? (
          <img width={100} height={100} src={scissors} alt="scissors image" />
        ) : (
          ''
        )}
        {playerMove !== '' && <h3>Player</h3>}
      </div>
      <div className={css.winner}>
        <p>{winner === 'Machine' || winner === username ? 'winner:' : ''}</p>
        <p style={{ color: 'white' }}>{winner}</p>
      </div>
      <div>
        {computerMove === 'rock' ? (
          <img width={100} height={100} src={rock} alt="rock image" />
        ) : (
          ''
        )}
        {computerMove === 'paper' ? (
          <img width={100} height={100} src={paper} alt="paper image" />
        ) : (
          ''
        )}
        {computerMove === 'scissors' ? (
          <img width={100} height={100} src={scissors} alt="scissors image" />
        ) : (
          ''
        )}
        {computerMove !== '' && <h3>Computer</h3>}
      </div>
    </div>
  );
}
