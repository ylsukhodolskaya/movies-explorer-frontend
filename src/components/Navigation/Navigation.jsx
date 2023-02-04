import React from "react";
import account_logo from '../../images/icon__COLOR_icon-main.svg';
import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation(props) {
  const { loggedIn } = props;

  return (
    <article className={`${loggedIn ? 'header__menu' : 'header__menu_right'}`} aria-label="header__menu">
      {loggedIn && <section className='header__left-links' aria-label="header__left-links">
        <Link
          to="/movies"
          className="link"
        >Фильмы</Link>
        <Link
          to="/saved-movies"
          className="link link_thin"
        >Сохраненные фильмы</Link>
      </section>}
      {!loggedIn && <section className='header__right-links' aria-label="header__right-links">
        <Link
          className="link "
          to="/signup"
        >
          Регистрация
        </Link>
        <Link
          to="/signin"
          className='link header__link-button'
        >Войти</Link>
      </section>}
      {loggedIn && <section className='header__account-links' aria-label="header__account-links">
        <Link
          className="link "
          to="/profile"
        >
          Аккаунт
        </Link>
        <Link
          to="/profile"
          className='link header__account-link-button'
        >
          <img src={account_logo} alt="" />
        </Link>
      </section>}
    </article>
  )
}

export default Navigation;