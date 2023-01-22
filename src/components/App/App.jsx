
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import Main from '../Main/Main.jsx';

import Movies from '../Movies/Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies/SavedMovies.jsx';

import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import NavTab from '../Main/NavTab/NavTab.jsx';
import { useState } from 'react';


function App() {

  const [isNavBarPopupOpen, setIsNavBarPopupOpen] = useState(false);
  const handleNavBarClick = () => {
    setIsNavBarPopupOpen(true);
  }
  const closeNavTabPopup = () => {
    setIsNavBarPopupOpen(false);
  };

  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div>

      <Header
      onNavBar={handleNavBarClick}
      >
        <Navigation />
      </Header>

      <Switch>
        <Route path="/sign-up">
          <Register />
        </Route>

        <Route path="/sign-in">
          <Login />
        </Route>

        <Route path="/movies">
          <Movies />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/404">
          <NotFound />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>

      <NavTab 
      isOpen={isNavBarPopupOpen}
      onClose={closeNavTabPopup}
       />
      <Footer />

    </div>
  );
}

export default App;
