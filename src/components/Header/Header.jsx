import React from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Header.css';
import { useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation.jsx';



function Header(props) {
  const {onNavBar, loggedIn} = props;

  const { pathname } = useLocation();
  const isLoginRegisterPage = pathname === '/signin' || pathname === '/signup';

  return (
    (!isLoginRegisterPage) &&
    <header className="header">
      <a href="/" className="header__link-logo">
        <img src={logo} className="header__logo" alt="logo" />
      </a>
      <button type="button" className="header__burger-button" onClick={onNavBar}></button>
      <Navigation loggedIn={loggedIn} />
    </header>
  )
}

export default Header;