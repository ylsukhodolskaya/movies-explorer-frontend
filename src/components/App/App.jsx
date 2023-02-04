import './App.css';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Movies from '../Movies/Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import NavTab from '../Main/NavTab/NavTab.jsx';
import { mainApi } from '../../utils/MainApi.jsx'
// Импортируем объект контекста
import { CurrentUserContext, defaultUserInfo } from '../../contexts/CurrentUserContext.js';
import { moviesApi } from '../../utils/MoviesApi';

function App() {

  const [isNavBarPopupOpen, setIsNavBarPopupOpen] = useState(false);
  const handleNavBarClick = () => {
    setIsNavBarPopupOpen(true);
  }
  const closeNavTabPopup = () => {
    setIsNavBarPopupOpen(false);
  };

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(true);
  const [isAuthCheck, setIsAuthCheck] = useState(false);
  // Переменная состояния пользователя
  const [currentUser, setCurrentUser] = useState(defaultUserInfo);

  function checkToken() {
    const token = localStorage.getItem('jwt') || '';
    mainApi.setToken(token);
    if (token) {
      mainApi.getUserInfo()
        .then((user) => {
          if (user) {
            setLoggedIn(true);
            setCurrentUser(user);
            setIsAuthCheck(true);
          } else {
            logOut();
          }
        })
        .catch((err) => {
          logOut();
        });
    } else {
      logOut();
    }
  }

  //обновление функции checkToken 
  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  // Регистрация пользователя
  function handleRegistration(registrationData, callback) {
    mainApi.register(registrationData)
      .then((result) => {
        setCurrentUser(result);
        return mainApi.login({ email: registrationData.email, password: registrationData.password })
      })
      .then((result) => {
        localStorage.setItem('jwt', result.token);
        setLoggedIn(true);
        callback('');
        history.push('/movies');
      })
      .catch((err) => {
        callback(err.message)
      })
  }

  // Авторизация пользователя
  function handleLogin(loginData, callback) {
    mainApi.login(loginData)
      .then((result) => {
        localStorage.setItem('jwt', result.token);
        setLoggedIn(true);
        callback('');
        history.push('/movies');
      })
      .catch((err) => {
        callback(err.message)
      })
  }

  // Изменение данных профиля
  function handleUpdateUser(userData, callback) {
    const token = localStorage.getItem('jwt') || '';
    mainApi.setToken(token);
    mainApi.editUserInfo(userData)
      .then((userDataServer) => {
        setCurrentUser({ ...currentUser, ...userDataServer });
        callback('');
      })
      .catch((err) => {
        callback(err.message)
      })
  };

  // Выход из аккаунта
  function logOut() {
    setIsAuthCheck(false);
    setLoggedIn(false);
    setCurrentUser(defaultUserInfo);
    localStorage.clear();
    mainApi.setToken('');
    mainApi.reset();
    moviesApi.reset();
    history.push('/');
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div>
        <Header
          onNavBar={handleNavBarClick}
          loggedIn={loggedIn}
        >
        </Header>

        <Switch>
        <Route path="/" exact>
            <Main />
          </Route>

          <Route path="/signup" >
            {!isAuthCheck ? <Register onRegister={handleRegistration} /> : <Redirect to="/" />}
          </Route>

          <Route path="/signin" >
            {!isAuthCheck ? <Login onLogin={handleLogin} /> : <Redirect to="/" />}
          </Route>

          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />

          <ProtectedRoute
            path="/profile"
            component={Profile}
            onProfile={handleUpdateUser}
            logOut={logOut}
            loggedIn={loggedIn}
          />

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>

        <NavTab
          isOpen={isNavBarPopupOpen}
          onClose={closeNavTabPopup}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
