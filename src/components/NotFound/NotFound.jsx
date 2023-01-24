import React from "react";
import './NotFound.css'

function NotFound() {
  return (
    <article className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__code">404</h1>
        <span className="not-found__text">Страница не найдена</span>
      </div>

      <a href="/" className="not-found__link">Назад</a>
    </article>
  )
}

export default NotFound;