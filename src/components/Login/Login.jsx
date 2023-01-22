import React from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Login.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <article className="login">
      <section className="login__container">
        <Link to="/" className="login__link-logo">
          <img src={logo} className="login__logo" alt="logo" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </section>

      <form className="login-form">
        <fieldset className="login-form__fieldset">
          <label className="login-form__label" htmlFor="email">
            <span className="login-form__span">
              E-mail
            </span>
            <input type="email" id="email" placeholder='Введите e-mail' className="login-form__input" />
          </label>
          <label className="login-form__label" htmlFor="password">
            <span className="login-form__span">
              Пароль
            </span>
            <input type="password" id="password" placeholder='Введите пароль' className="login-form__input" />
          </label>
        </fieldset>
        <span className="login-form__error"></span>
      </form>

      <section className="login-buttons">
        <button type="submit" className="login-buttons__submit">Войти</button>
        <div className="login-buttons__container">
          <span className="login-buttons__text">Ещё не зарегистрированы?</span>
          <Link to="/sign-up" className="login-buttons__link">Регистрация</Link>
        </div>
      </section>

    </article>
  )
}

export default Login;