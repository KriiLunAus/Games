import css from './LogInPage.module.css';
export default function LogInPage({ onLogin }) {
  function handleSubmit(evt) {
    evt.preventDefault();

    if (evt.target.username.value) {
      onLogin(true);
      localStorage.setItem('username', evt.target.username.value);
    } else {
      evt.target.username.placeholder = 'Type your name please :)';
    }
  }
  return (
    <div className={`${css.container} ${css.formWrapper}`}>
      <form id="form" className={css.logInForm} onSubmit={handleSubmit}>
        <label htmlFor="username">Please type your username</label>
        <input type="text" name="username" id="username" autoComplete="off" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
