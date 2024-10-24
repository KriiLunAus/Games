import css from './MobileMenu.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function MobileMenu({ username, setIsOpen, onLogOut }) {
  return (
    <div
      onClick={() => {
        setIsOpen(false);
      }}
      className={css.menuWrapper}
    >
      <div
        onClick={e => {
          e.stopPropagation(); // event stopps here
        }}
        className={css.menu}
      >
        <Link
          onClick={() => {
            setIsOpen(false);
          }}
          to="/"
          className={css.menuLink}
        >
          Home
        </Link>

        <div className={css.user}>
          <p>{username}</p>
          <button
            onClick={() => {
              localStorage.removeItem('username');
              onLogOut(false);
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  setIsOpen: PropTypes.func.isRequired, // Validate setIsOpen prop
};
