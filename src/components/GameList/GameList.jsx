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
  cardGame: {
    path: '/cardGame',
    link: 'https://images.pexels.com/photos/26665694/pexels-photo-26665694/free-photo-of-gatos-de-acumuladora-de-animais-no-brasil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
};

export default function GameList() {
  return (
    <section className={css.container}>
      <ul className={css.gameList}>
        <GameComponent {...games.flipTheCoin} />
        <GameComponent {...games.rockPaperScisors} />
        <GameComponent {...games.seaBattle} />
        <GameComponent {...games.cardGame} />
      </ul>
    </section>
  );
}
