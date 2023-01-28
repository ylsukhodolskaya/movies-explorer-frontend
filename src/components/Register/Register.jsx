import React from "react";
import logo from '../../images/logo__COLOR_main-1.svg';
import './Register.css'

function Register(props) {
  const { onRegister } = props;

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  


  // Обработчик формы при submit
  function handleSubmit(e) {
    console.log('handleSubmit!!!!!!!!!!!');
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onRegister({
      name,
      email,
      password
    });
  }

  return (
    <article className="register" aria-label="register">
      <section className="register__container" aria-label="register">
        <a href="/" className="register__link-logo">
          <img src={logo} className="register__logo" alt="logo" />
        </a>
        <h2 className="register__title">Добро пожаловать!</h2>
      </section>

      <form className="register-form"   onSubmit={handleSubmit}>
        <fieldset className="register-form__fieldset">
          <label className="register-form__label" htmlFor="name">
            <span className="register-form__span">
              Имя
            </span>
            <input
              type="text"
              id="name"
              placeholder='Введите имя'
              className="register-form__input"
              onChange={handleChangeName}
              value={name}
              required
            />
          </label>
          <label className="register-form__label" htmlFor="email">
            <span className="register-form__span">
              E-mail
            </span>
            <input
              type="email"
              id="email"
              placeholder='Введите e-mail'
              className="register-form__input"
              onChange={handleChangeEmail}
              value={email}
              required
            />
          </label>
          <label className="register-form__label" htmlFor="password">
            <span className="register-form__span">
              Пароль
            </span>
            <input
              type="password"
              id="password"
              placeholder='Введите пароль'
              className="register-form__input"
              onChange={handleChangePassword}
              value={password}
              required
            />
          </label>
        </fieldset>
        <span className="register-form__error">xnj nj gjikj</span>
     

      <section className="register-buttons" aria-label="register-buttons">
        <button type="submit" className="register-buttons__submit" >Зарегистрироваться</button>
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