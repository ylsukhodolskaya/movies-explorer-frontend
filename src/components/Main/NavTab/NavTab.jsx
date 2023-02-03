import React from "react";
import './NavTab.css';
import account_logo from '../../../images/icon__COLOR_icon-main.svg';
import { Link, useLocation } from "react-router-dom";



function NavTab({ isOpen, onClose }) {

  const { pathname } = useLocation();

  return (
    <article className={`navtab ${isOpen && 'navtab_opened'}`} aria-label="navtab" onClick={onClose}>
      <section className="navtab__popup" aria-label="navtab">
        <button type="button" className="navtab__close" onClick={onClose}></button>
        <div className="navtab__navigate">
          <Link
            to="/"
            className={`navtab__navigate-link ${pathname === '/' ? 'navtab__navigate-link_active' : ''}`}
          >Главная</Link>
          <Link
            to="/movies"
            className={`navtab__navigate-link ${pathname === '/movies' ? 'navtab__navigate-link_active' : ''}`}
          >Фильмы</Link>
          <Link
            to="/saved-movies"
            className={`navtab__navigate-link ${pathname === '/saved-movies' ? 'navtab__navigate-link_active' : ''}`}
          >Сохранённые фильмы</Link>
        </div>
        <div className='navtab__account-links'>
          <Link
            className="navtab__account-link"
            to="/profile"
          >
            Аккаунт
          </Link>
          <Link
            to="/profile"
            className='navtab__account-link-button'>
            <img src={account_logo} alt="" />
          </Link>
        </div>
      </section>
    </article>
  )
}

export default NavTab;