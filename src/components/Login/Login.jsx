import React from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Login.css';
import { Link } from 'react-router-dom';


function Login(props) {
  const { onLogin } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }


  // Обработчик формы при submit
  function handleSubmit(e) {
    console.log('handleSubmit!!!!!!!!!!!');
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onLogin({
      email,
      password
    });
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
              placeholder='Введите e-mail'
              className="login-form__input"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
          <label className="login-form__label" htmlFor="password">
            <span className="login-form__span">
              Пароль
            </span>
            <input
              type="password"
              id="password"
              placeholder='Введите пароль'
              className="login-form__input"
              value={password}
              onChange={handleChangePassword}
            />
          </label>
        </fieldset>
        <span className="login-form__error"></span>


        <section className="login-buttons" aria-label="login-buttons">
          <button type="submit" className="login-buttons__submit">Войти</button>
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