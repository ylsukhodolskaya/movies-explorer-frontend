// import logo from '../../images/logo__COLOR_main-1.svg';
// import account_logo from '../../images/icon__COLOR_icon-main.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import cards from '../../utils/constants.js'
import Header from '../Header/Header.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import Main from '../Main/Main.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm.jsx';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import NavTab from '../Main/NavTab/NavTab.jsx';
import { useState } from 'react';


function App() {

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>

      <Header>
        <Navigation />
      </Header> 

      <Switch>
        <Route path="/sign-up">
          <Register />
        </Route>

        <Route path="/sign-in">
          <Login />
        </Route>
      </Switch>

      <NavTab />
      {/* <Main /> */}
      {/* <SearchForm /> */}
      {/* <MoviesCardList /> */}
      <Profile />
      {/* <Register /> */}
      {/* <Login /> */}
      <Footer />
      {/* <NotFound /> */}

    </div>
  );
}

export default App;
