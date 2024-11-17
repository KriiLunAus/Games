import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import useWidth from '../../hooks/useWidth';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import menu from '../../images/svg/menu.svg';
import css from './HeaderComponent.module.css';
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function HeaderComponent({ onLogOut }) {
  const username = localStorage.getItem('username');
  const [isOpen, setIsOpen] = useState(false);

  const vw = useWidth();
  const location = useLocation();
  return (
    <>
      <div className={css.container}>
        {vw < 1024 && (
          <header className={css.headerMobile}>
            <h3 className={css.gameHeader}>
              {getGameHeader(location.pathname)}
            </h3>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className={css.navBtn}
            >
              <img src={menu} alt="menu button" />
            </button>
          </header>
        )}
        {vw < 1024 && isOpen && (
          <MobileMenu
            onLogOut={onLogOut}
            username={username}
            setIsOpen={setIsOpen}
          />
        )}

        {vw >= 1024 && (
          <header className={css.headerDesktop}>
            <NavLink to="./" className={buildLinkClass}>
              Home
            </NavLink>
            <p className={css.username}>{username}</p>
            <button
              className={css.logOutButton}
              onClick={() => {
                localStorage.removeItem('username');
                onLogOut(false);
              }}
            >
              Log Out
            </button>
          </header>
        )}
      </div>
    </>
  );
}

function getGameHeader() {
  const pathname = window.location.pathname.slice(1);
  switch (pathname) {
    case 'coinGame':
      return 'Toss A Coin';

    case 'rockParerScisors':
      return 'じゃんけん';

    case 'seaBattle':
      return 'Sea Battle';

    default:
      '';
      break;
  }
}

console.log(getGameHeader());
