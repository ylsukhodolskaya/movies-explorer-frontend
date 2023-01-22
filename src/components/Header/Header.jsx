import React from "react";
// import { Link } from "react-router-dom";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Header.css';

function Header({children}) {
  return (
    <header className="header">
      <a href="/" className="header__link-logo">
        <img src={logo} className="header__logo" alt="logo" />
      </a>
      <button type="button" className="header__burger-button"></button>
      {children}
    </header>
  )
}

export default Header;