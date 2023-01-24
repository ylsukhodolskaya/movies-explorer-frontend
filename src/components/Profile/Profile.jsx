import React from "react";
import './Profile.css';

function Profile() {
  return (
    <article className="profile">
      <form action="/" className="profile-form">
        <h2 className="profile-form__header">Привет, Госпожа!</h2>
        <fieldset className="profile-form__fields">
          <label className="profile-form__label" htmlFor="name">
            <span className="profile-form__field-name">
              Имя
            </span>
            <input type="text" id="name" placeholder='Введите имя' className="profile-form__field" />
          </label>

          <label className="profile-form__label" htmlFor="email">
            <span className="profile-form__field-name">
              Почта
            </span>
            <input type="email" id="email" placeholder='Введите почту' className="profile-form__field" />
          </label>
        </fieldset>

        <fieldset className="profile-form__buttons">
          <span className="profile-form__error"></span>
          <button type="submit" className="profile-form__button-edit">Редактировать</button>
          <button type="button" className="profile-form__button-log-out">Выйти из аккаунта</button>
        </fieldset>
      </form>
    </article>
  )
}

export default Profile;