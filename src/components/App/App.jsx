import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
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
  // Переменная состояния пользователя
  const [currentUser, setCurrentUser] = useState(defaultUserInfo);



  function checkToken() {
    const token = localStorage.getItem('jwt') || '';
    mainApi.setToken(token);
    if (token) {
      mainApi.getUserInfo()
        .then((user) => {
          console.log(user)
          if (user) {
            setLoggedIn(true);
            setCurrentUser(user);
            // setCards(cards.data.reverse());
            // history.push('/');
            console.log('Token OK App.jsx');
          } else {
            setLoggedIn(false);
            history.push('/');
            console.log('Ошибка токена App.jsx')
          }
        })
        .catch((err) => {
          setLoggedIn(false)
          console.log('//////Ошибка токена App.jsx//////', err);
          // openInfoTooltipPopup(false);
        });
    } else {
      setLoggedIn(false)
    }
  }

  //обновление функции checkToken 
  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  // Регистрация пользователя
  function handleRegistration(registrationData) {
    mainApi.register(registrationData)
      .then((result) => {
        if (result) {
          // openInfoTooltipPopup(true);
          history.push('/signin');
          setCurrentUser(result);
          console.log('Регистрация ОК App.jsx')
        } else {
          // openInfoTooltipPopup(false);
          console.log('Ошибка при регистрации в App.jsx')
        }
      })
      .catch((err) => {
        console.log('/////Ошибка при регистрации в App.jsx/////', err);
        // openInfoTooltipPopup(false);
      })
  }

  // Авторизация пользователя
  function handleLogin(loginData) {
    mainApi.login(loginData)
      .then((result) => {
        if (result) {
          localStorage.setItem('jwt', result.token);
          setLoggedIn(true);
          history.push('/movies');
          console.log('Login ОК App.jsx');
          // checkToken();
        } else {
          // openInfoTooltipPopup(false);
          console.log('Ошибка при авторизации в App.jsx')
        }
      })
      .catch((err) => {
        console.log('//////Ошибка при авторизации в App.jsx///////', err);
        // openInfoTooltipPopup(false);
      })
  }

  // Изменение данных профиля
  function handleUpdateUser(userData) {
    console.log('userData', userData);
    const token = localStorage.getItem('jwt') || '';
    mainApi.setToken(token);
    mainApi.editUserInfo(userData)
      .then((userDataServer) => {
        console.log('userDataServer', userDataServer);
        setCurrentUser({ ...currentUser, ...userDataServer });
      })
      .catch((err) => {
        console.log('///// ОШИБКА App.jsx Изменение данных профиля/////', err);
        // openInfoTooltipPopup(false);
      })
    // .finally(() => closeAllPopups());
  };

  // Выход из аккаунта
  function logOut() {
    setLoggedIn(false);
    setCurrentUser(defaultUserInfo);
    localStorage.clear();
    history.push('/signin');
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
          <Route path="/signup">
            <Register onRegister={handleRegistration} />
          </Route>

          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route>

          <Route path="/saved-movies">
            <SavedMovies />
          </Route>

          <Route path="/profile">
            <Profile
              onProfile={handleUpdateUser}
              logOut={logOut}
            />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
