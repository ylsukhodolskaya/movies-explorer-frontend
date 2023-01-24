import React from "react";
import './NavTab.css';
import account_logo from '../../../images/icon__COLOR_icon-main.svg';


function NavTab({ isOpen, onClose }) {
  return (
    <article className={`navtab ${isOpen && 'navtab_opened'}`} aria-label="navtab">
      <section className="navtab__popup" aria-label="navtab">
        <button type="button" className="navtab__close" onClick={onClose}></button>
        <div className="navtab__navigate">
          <a
            href="/"
            className="navtab__navigate-link"
          >Главная</a>
          <a
            href="/movies"
            className="navtab__navigate-link"
          >Фильмы</a>
          <a
            href="/saved-movies"
            className="navtab__navigate-link"
          >Сохранённые фильмы</a>
        </div>
        <div className='navtab__account-links'>
          <a
            className="navtab__account-link"
            href="/profile"
          >
            Аккаунт
          </a>
          <a
            href="/profile"
            className='navtab__account-link-button'>
            <img src={account_logo} alt="" />
          </a>
        </div>
      </section>
    </article>
  )
}

export default NavTab;