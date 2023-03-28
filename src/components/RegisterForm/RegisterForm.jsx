import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    console.log({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log('form is submitted');
    form.reset();
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
