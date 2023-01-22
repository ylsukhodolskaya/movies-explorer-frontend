import React from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Register.css'

function Register() {
  return (
    <article className="register">
      <section className="register__container">
        <a href="/" className="register__link-logo">
          <img src={logo} className="register__logo" alt="logo" />
        </a>
        <h1 className="register__title">Добро пожаловать!</h1>
      </section>

      <form className="register-form">
        <fieldset className="register-form__fieldset">
          <label className="register-form__label" htmlFor="name">
            <span className="register-form__span">
              Имя
            </span>
            <input type="text" id="name" placeholder='Введите имя' className="register-form__input" />
          </label>
          <label className="register-form__label" htmlFor="email">
            <span className="register-form__span">
              E-mail
            </span>
            <input type="email" id="email" placeholder='Введите e-mail' className="register-form__input" />
          </label>
          <label className="register-form__label" htmlFor="password">
            <span className="register-form__span">
              Пароль
            </span>
            <input type="password" id="password" placeholder='Введите пароль' className="register-form__input" />
          </label>
        </fieldset>
        <span className="register-form__error"></span>
      </form>

      <section className="register-buttons">
        <button type="submit" className="register-buttons__submit">Зарегистрироваться</button>
        <div className="register-buttons__container">
          <span className="register-buttons__text">Уже зарегистрированы?</span>
          <a href="/sign-in" className="register-buttons__link">Войти</a>
        </div>
      </section>

    </article>
  )
}

export default Register;