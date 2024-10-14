import css from './HeroComponent.module.css';

export default function HeroComponent() {
  return (
    <>
      <section className={`${css.container} ${css.hero}`}>
        <h1>games</h1>
      </section>
    </>
  );
}
