import { useState } from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Register.css'

function Register(props) {
  const { onRegister } = props;

  const [value, setValue] = useState({name: '', email: '', password: ''});
  const [error, setError] = useState({name: '', email: '', password: ''});
  const [isValidForm, setIsValidForm] = useState(false);
  const [apiError, setApiError] = useState('');

  function handleChange(e) {
    setValue((preValue) => ({
      ...preValue, 
      [e.target.name]: e.target.value
    }));
    setError((preValue) => ({
      ...preValue, 
      [e.target.name]: e.target.validationMessage
    }));
    setIsValidForm(e.target.closest('form').checkValidity())
  }

  // Обработчик формы при submit
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onRegister(value, setApiError);
  }


  return (
    <article className="register" aria-label="register">
      <section className="register__container" aria-label="register">
        <a href="/" className="register__link-logo">
          <img src={logo} className="register__logo" alt="logo" />
        </a>
        <h2 className="register__title">Добро пожаловать!</h2>
      </section>

      <form className="register-form" noValidate  onSubmit={handleSubmit}>
        <fieldset className="register-form__fieldset">
          <label className="register-form__label" htmlFor="name">
            <span className="register-form__span">
              Имя
            </span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Введите имя'
              className="register-form__input"
              onChange={handleChange}
              value={value.name}
              required
              minLength={2}
            />
          </label>
          <span className="register-form__error">{error.name}</span>

          <label className="register-form__label" htmlFor="email">
            <span className="register-form__span">
              E-mail
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Введите e-mail'
              className="register-form__input"
              onChange={handleChange}
              value={value.email}
              required
            />
          </label>
          <span className="register-form__error">{error.email}</span>

          <label className="register-form__label" htmlFor="password">
            <span className="register-form__span">
              Пароль
            </span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Введите пароль'
              className="register-form__input"
              onChange={handleChange}
              value={value.password}
              required
              minLength={5}
            />
          </label>
          <span className="register-form__error">{error.password}</span>
        </fieldset>
        <span className="register-form__error">{apiError}</span>
     

      <section className="register-buttons" aria-label="register-buttons">
        <button type="submit" className="register-buttons__submit " disabled={!isValidForm}>Зарегистрироваться</button>
        <div className="register-buttons__container">
          <span className="register-buttons__text">Уже зарегистрированы?</span>
          <a href="/signin" className="register-buttons__link">Войти</a>
        </div>
      </section>
      </form>
    </article>
  )
}

export default Register;