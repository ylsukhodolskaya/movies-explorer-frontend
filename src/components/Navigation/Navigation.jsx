import React from "react";
// import { Link } from "react-router-dom";
import account_logo from '../../images/icon__COLOR_icon-main.svg';
import './Navigation.css';

function Navigation() {
  return (
    <article className='header__menu' aria-label="header__menu">
      <section className='header__left-links' aria-label="header__left-links">
        <a
          href="/movies"
          className="link"
        >Фильмы</a>
        <a
          href="/saved-movies"
          className="link link_thin"
        >Сохраненные фильмы</a>
      </section>
      {/* <section className='header__right-links' aria-label="header__right-links">
        <a
          className="link "
          href="/sign-up"
        >
          Регистрация
        </a>
        <a
          href="/sign-in"
          className='link header__link-button'
        >Войти</a>
      </section> */}
      <section className='header__account-links' aria-label="header__account-links">
        <a
          className="link "
          href="/profile"
        >
          Аккаунт
        </a>
        <a
          href="/profile"
          className='link header__account-link-button'
        >
          <img src={account_logo} alt="" />
        </a>
      </section>
    </article>
  )
}

export default Navigation;