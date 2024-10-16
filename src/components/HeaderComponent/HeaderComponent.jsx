import css from './HeaderComponent.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import useWidth from '../../hooks/useWidth';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function HeaderComponent() {
  const vw = useWidth();
  return (
    <>
      <div className={css.container}>
        {vw < 1024 && (
          <header className={css.headerMobile}>
            <button className={css.navBtn}>
              <svg width={45} height={45}>
                <rect fill="#bdff00" height="5" width="33" x="6" y="10" />{' '}
                <rect fill="#bdff00" height="5" width="33" x="6" y="20" />{' '}
                <rect fill="#bdff00" height="5" width="33" x="6" y="30" />
              </svg>
            </button>
          </header>
        )}

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
