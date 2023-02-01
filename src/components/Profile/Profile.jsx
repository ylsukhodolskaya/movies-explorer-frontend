import { useState, useContext, useEffect } from "react";
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';


function Profile(props) {
  const { onProfile, logOut } = props;
  const currentUser = useContext(CurrentUserContext);

  const [value, setValue] = useState({ name: currentUser.name, email: currentUser.email });
  const [error, setError] = useState({ name: '', email: '' });
  const [isValidForm, setIsValidForm] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const hasError = apiError || error.email || error.name;

  function handleChange(e) {
    setValue((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value
    }));
    setError((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.validationMessage
    }));
    setIsValidForm(e.target.closest('form').checkValidity());
    setIsSubmit(false);
  }

  //кнопка редактировать становится неактивной, если данные совпадают
  useEffect(() => {
    setIsDisabled(currentUser.name === value.name && currentUser.email === value.email)
  }, [value.name, value.email, currentUser.name, currentUser.email]);

  // // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setValue({ name: currentUser.name, email: currentUser.email })
  }, [currentUser.name, currentUser.email]);

  // Обработчик формы при submit
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onProfile(value, setApiError);
    setIsSubmit(true);
  }

  return (
    <article className="profile">
      <form action="/" className="profile-form" onSubmit={handleSubmit} >
        <h2 className="profile-form__header">Привет, {value.name}!</h2>
        <fieldset className="profile-form__fields">
          <label className="profile-form__label" htmlFor="name">
            <span className="profile-form__field-name">
              Имя
            </span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Введите имя'
              className="profile-form__field"
              onChange={handleChange}
              value={value.name}
              required
              minLength={2}
            />

          </label>

          <label className="profile-form__label" htmlFor="email">
            <span className="profile-form__field-name">
              Почта
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Введите почту'
              className="profile-form__field"
              onChange={handleChange}
              value={value.email}
              required
            />
          </label>
        </fieldset>

        <fieldset className="profile-form__buttons">
          <span className={hasError ? "profile-form__error" : "profile-form__success"}>{!isSubmit && !hasError ? '' : hasError || 'Данные успешно обновлены'}</span>
          <button type="submit" className="profile-form__button-edit" disabled={!isValidForm || isDisabled} >Редактировать</button>
          <button type="button" className="profile-form__button-log-out" onClick={logOut}>Выйти из аккаунта</button>
        </fieldset>
      </form>
    </article>
  )
}

export default Profile;