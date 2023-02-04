import React from "react";
import './NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <article className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__code">404</h1>
        <span className="not-found__text">Страница не найдена</span>
      </div>

      <Link to="/" className="not-found__link">Назад</Link>
    </article>
  )
}

export default NotFound;