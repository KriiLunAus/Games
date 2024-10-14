import css from './Footer.module.css';

export default function Footer() {
  return (
    <section className={css.footer}>
      <ul>
        <li>
          <a href="https://github.com/KriiLunAus/Games">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dmytrobosyk/">LinkedIn</a>
        </li>
        <li>
          <p>test@gmail.com</p>
        </li>
      </ul>
    </section>
  );
}
