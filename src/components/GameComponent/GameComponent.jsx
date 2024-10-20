import css from './GameComponent.module.css';
import { Link } from 'react-router-dom';

export default function GameComponent(games) {
  const { path, link } = games;

  return (
    <div>
      <li>
        <Link
          style={{
            backgroundImage: `url(${link})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '700px',
          }}
          className={css.link}
          to={path}
        ></Link>
      </li>
    </div>
  );
}
