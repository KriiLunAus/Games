import css from './MobileMenu.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export default function MobileMenu({ setIsOpen }) {
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

        <p>username</p>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  setIsOpen: PropTypes.func.isRequired, // Validate setIsOpen prop
};
