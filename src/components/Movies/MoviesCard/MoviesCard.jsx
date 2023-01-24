import React from "react";
import './MoviesCard.css';

function MoviesCard() {
  return (
    <li className='movies__item'>
      <section className='movies__item-container' aria-label="movies-item">
        <div className='movies__item-header'>
          <div className='movies__item-header-info'>
            <h2 className='movies__item-name'>33 слова о дизайне</h2>
            <p className='movies__item-duration'>1ч 47м</p>
          </div>
          <button className='movies__item-bookmark'></button>
        </div>
        <a href="/" className='movies__item-link'>
          <img src="https://kartinkin.net/uploads/posts/2022-12/1670331228_24-kartinkin-net-p-vertikalnie-kartinki-oboi-25.jpg" alt="/" className='movies__item-image' />
        </a>
      </section>
    </li>
  )
}

export default MoviesCard;