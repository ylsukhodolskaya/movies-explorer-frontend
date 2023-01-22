import React from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Header.css';


function Header({children, onNavBar}) {
  return (
    <header className="header">
      <a href="/" className="header__link-logo">
        <img src={logo} className="header__logo" alt="logo" />
      </a>
      <button type="button" className="header__burger-button" onClick={onNavBar}></button>
      {children}
    </header>
  )
}

export default Header;