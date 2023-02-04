import { useState } from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Login.css';
import { Link } from 'react-router-dom';

function Login(props) {
  const { onLogin } = props;

  const [value, setValue] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });
  const [isValidForm, setIsValidForm] = useState(false);
  const [apiError, setApiError] = useState('');

  function handleChange(e) {
    setValue((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value
    }));
    setError((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.validationMessage
    }));
    setIsValidForm(e.target.closest('form').checkValidity())
  }

  // Обработчик формы при submit
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onLogin(value, setApiError);
  }

  return (
    <article className="login" aria-label="login">
      <section className="login__container" aria-label="login">
        <Link to="/" className="login__link-logo">
          <img src={logo} className="login__logo" alt="logo" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
      </section>

      <form className="login-form" onSubmit={handleSubmit}>
        <fieldset className="login-form__fieldset">
          <label className="login-form__label" htmlFor="email">
            <span className="login-form__span">
              E-mail
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Введите e-mail'
              className="login-form__input"
              value={value.email}
              onChange={handleChange}
              required
              pattern=".+@.+\..+"
            />
          </label>
          <span className="login-form__error">{error.email}</span>
          <label className="login-form__label" htmlFor="password">
            <span className="login-form__span">
              Пароль
            </span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Введите пароль'
              className="login-form__input"
              value={value.password}
              onChange={handleChange}
              required
              minLength={5}
            />
          </label>
          <span className="login-form__error">{error.password}</span>
        </fieldset>
        <span className="login-form__error">{apiError}</span>

        <section className="login-buttons" aria-label="login-buttons">
          <button type="submit" className="login-buttons__submit " disabled={!isValidForm}>Войти</button>
          <div className="login-buttons__container">
            <span className="login-buttons__text">Ещё не зарегистрированы?</span>
            <Link to="/signup" className="login-buttons__link">Регистрация</Link>
          </div>
        </section>
      </form>
    </article>
  )
}

export default Login;