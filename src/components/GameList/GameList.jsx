import css from './GameList.module.css';
import GameComponent from '../GameComponent/GameComponent';
const games = {
  flipTheCoin: {
    path: '/flipTheCoin',
    link: 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-halloween-cat-1036x780.jpg',
  },
};

export default function GameList() {
  return (
    <section className={css.container}>
      <ul className={css.gameList}>
        <GameComponent {...games.flipTheCoin} />
        <GameComponent {...games.flipTheCoin} />
        <GameComponent {...games.flipTheCoin} />
        <GameComponent {...games.flipTheCoin} />
      </ul>
    </section>
  );
}
