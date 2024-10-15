import css from './Footer.module.css';
import github from '../../images/svg/github.svg';
import linkedin from '../../images/svg/linkedin.svg';
import email from '../../images/svg/email.svg';

export default function Footer() {
  return (
    <section className={css.footer}>
      <ul>
        <li>
          <a href="https://github.com/KriiLunAus/Games">
            <img width={50} height={50} src={github} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dmytrobosyk/">
            {' '}
            <img width={50} height={50} src={linkedin} alt="" />
          </a>
        </li>
        <li>
          <p>
            {' '}
            <img width={50} height={50} src={email} alt="" />
          </p>
        </li>
        <li></li>
      </ul>
    </section>
  );
}
