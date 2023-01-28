import React from "react";
import account_logo from '../../images/icon__COLOR_icon-main.svg';
import './Navigation.css';

function Navigation(props) {
  const { loggedIn } = props;

  return (
    <article className={`${loggedIn ? 'header__menu' : 'header__menu_right'}`} aria-label="header__menu">
      {loggedIn && <section className='header__left-links' aria-label="header__left-links">
        <a
          href="/movies"
          className="link"
        >Фильмы</a>
        <a
          href="/saved-movies"
          className="link link_thin"
        >Сохраненные фильмы</a>
      </section>}
      {!loggedIn && <section className='header__right-links' aria-label="header__right-links">
        <a
          className="link "
          href="/signup"
        >
          Регистрация
        </a>
        <a
          href="/signin"
          className='link header__link-button'
        >Войти</a>
      </section>}
      {loggedIn && <section className='header__account-links' aria-label="header__account-links">
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
      </section>}
    </article>
  )
}

export default Navigation;