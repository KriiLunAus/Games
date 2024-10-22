import rock from '../../images/svg/rock.svg';
import paper from '../../images/svg/paper.svg';
import scissors from '../../images/svg/scissors.svg';
import css from './GameResult.module.css';
export default function GameResult(result) {
  return (
    <div className={css.gameResultWrapper}>
      <div>
        {result.result.computerMove === 'rock' ? (
          <img width={100} height={100} src={rock} alt="rock image" />
        ) : (
          ''
        )}
        {result.result.computerMove === 'paper' ? (
          <img width={100} height={100} src={paper} alt="paper image" />
        ) : (
          ''
        )}
        {result.result.computerMove === 'scissors' ? (
          <img width={100} height={100} src={scissors} alt="scissors image" />
        ) : (
          ''
        )}
        {result.result.computerMove !== '' && <h3>Computer</h3>}
      </div>
      <div>
        {result.result.playerMove === 'rock' ? (
          <img width={100} height={100} src={rock} alt="rock image" />
        ) : (
          ''
        )}
        {result.result.playerMove === 'paper' ? (
          <img width={100} height={100} src={paper} alt="paper image" />
        ) : (
          ''
        )}
        {result.result.playerMove === 'scissors' ? (
          <img width={100} height={100} src={scissors} alt="scissors image" />
        ) : (
          ''
        )}
        {result.result.playerMove !== '' && <h3>Player</h3>}
      </div>
    </div>
  );
}
