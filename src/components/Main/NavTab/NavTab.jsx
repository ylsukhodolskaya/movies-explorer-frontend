import React from "react";
import './NavTab.css';
import account_logo from '../../../images/icon__COLOR_icon-main.svg';


function NavTab ({isOpen, onClose}) {
  return (
<article className={`navtab ${isOpen && 'navtab_opened'}`}>
  <section className="navtab__popup">
    <button type="button" className="navtab__close" onClick={onClose}></button>
    <div className="navtab__navigate">
      <a href="/" className="navtab__navigate-link">Главная</a>
      <a href="/" className="navtab__navigate-link">Фильмы</a>
      <a href="/" className="navtab__navigate-link">Сохранённые фильмы</a>
    </div>
    <div className='navtab__account-links'>
      <a
        className="navtab__account-link"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Аккаунт
      </a>
      <a href="/" className=' navtab__account-link-button'>
        <img src={account_logo} alt="" />
      </a>
    </div>
  </section>
</article>
  )
}

export default NavTab;