import React from "react";
// import { Link } from "react-router-dom";
import account_logo from '../../images/icon__COLOR_icon-main.svg';
import './Navigation.css';

function Navigation () {
  return (
    <article className='header__menu'>
    <section className='header__left-links'>
      <a href="/" className="link"
      >Фильмы</a>
      <a href="/" className="link text_thin"
      >Сохраненные фильмы</a>
    </section>
    {/* <section className='header__right-links'>
      <a
        className="link "
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Регистрация
      </a>
      <a href="/" className='link header__link-button'>Войти</a>
    </section> */}
    <section className='header__account-links'>
      <a
        className="link "
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Аккаунт
      </a>
      <a href="/" className='link header__account-link-button'>
        <img src={account_logo} alt="" />
      </a>
    </section>
  </article>
  )
}

export default Navigation;