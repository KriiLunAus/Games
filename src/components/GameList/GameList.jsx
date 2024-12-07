import css from './GameList.module.css';
import GameComponent from '../GameComponent/GameComponent';
import coin from '../../images/flipTheCoin.png';
import rockPaperScisors from '../../images/rockPaperScisors.png';
import board from '../../images/sea-battle.png';

const games = {
  flipTheCoin: {
    path: '/coinGame',
    link: coin,
  },
  rockPaperScisors: {
    path: '/rockParerScisors',
    link: rockPaperScisors,
  },
  seaBattle: {
    path: '/seaBattle',
    link: board,
  },
};

export default function GameList() {
  return (
    <section className={css.container}>
      <ul className={css.gameList}>
        <GameComponent {...games.flipTheCoin} />
        <GameComponent {...games.rockPaperScisors} />
        <GameComponent {...games.seaBattle} />
      </ul>
    </section>
  );
}
