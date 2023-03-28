import css from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <form className={css.form}>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
