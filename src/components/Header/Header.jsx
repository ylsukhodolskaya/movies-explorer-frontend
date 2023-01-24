import React from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Header.css';
import { useLocation } from "react-router-dom";


function Header({children, onNavBar}) {

  const { pathname } = useLocation();
  const isLoginRegisterPage = pathname === '/sign-in' || pathname === '/sign-up';

  return (
    (!isLoginRegisterPage) &&
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