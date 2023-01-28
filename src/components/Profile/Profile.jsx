import React from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';


function Profile(props) {
  const {onProfile, logOut} = props;
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  console.log ('name!!!!', name);
  console.log ('email!!!!', email);
  console.log ('currentUser!!!!', currentUser);



  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  // // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  // Обработчик формы при submit
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onProfile({
      name,
      email,
    });
  }

  return (
    <article className="profile">
      <form action="/" className="profile-form" onSubmit={handleSubmit} >
        <h2 className="profile-form__header">Привет, {name}!</h2>
        <fieldset className="profile-form__fields">
          <label className="profile-form__label" htmlFor="name">
            <span className="profile-form__field-name">
              Имя
            </span>
            <input 
            type="text" 
            id="name" 
            placeholder='Введите имя' 
            className="profile-form__field" 
            onChange={handleChangeName}
            value={name}
            />
          </label>

          <label className="profile-form__label" htmlFor="email">
            <span className="profile-form__field-name">
              Почта
            </span>
            <input 
            type="email" 
            id="email" 
            placeholder='Введите почту' 
            className="profile-form__field" 
            onChange={handleChangeEmail}
            value={email}
            />
          </label>
        </fieldset>

        <fieldset className="profile-form__buttons">
          <span className="profile-form__error"></span>
          <button type="submit" className="profile-form__button-edit" >Редактировать</button>
          <button type="button" className="profile-form__button-log-out" onClick={logOut}>Выйти из аккаунта</button>
        </fieldset>
      </form>
    </article>
  )
}

export default Profile;