import css from './GameList.module.css';
import GameComponent from '../GameComponent/GameComponent';
import coin from '../../images/flipTheCoin.png';

const games = {
  flipTheCoin: {
    path: '/flipTheCoin',
    link: coin,
  },
  rockPaperScisors: {
    path: '/rockParerScisors',
    link: 'https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
  },
  seaBattle: {
    path: '/seaBattle',
    link: 'https://images.pexels.com/photos/5104118/pexels-photo-5104118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
