import css from './HeaderComponent.module.css';

export default function HeaderComponent() {
  return (
    <>
      <header className={`${css.header} ${css.container}`}>
        <button className={css.navBtn}>
          <svg width={45} height={45}>
            <rect fill="#bdff00" height="5" width="33" x="6" y="10" />{' '}
            <rect fill="#bdff00" height="5" width="33" x="6" y="20" />{' '}
            <rect fill="#bdff00" height="5" width="33" x="6" y="30" />
          </svg>
        </button>
      </header>
    </>
  );
}
