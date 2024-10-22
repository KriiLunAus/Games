import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import useWidth from '../../hooks/useWidth';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import menu from '../../images/svg/menu.svg';
import css from './HeaderComponent.module.css';
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const vw = useWidth();
  return (
    <>
      <div className={css.container}>
        {vw < 1024 && (
          <header className={css.headerMobile}>
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
        {vw < 1024 && isOpen && <MobileMenu setIsOpen={setIsOpen} />}

        {vw >= 1024 && (
          <header className={css.headerDesktop}>
            <NavLink to="./" className={buildLinkClass}>
              Home
            </NavLink>

            <p>Username</p>
          </header>
        )}
      </div>
    </>
  );
}
