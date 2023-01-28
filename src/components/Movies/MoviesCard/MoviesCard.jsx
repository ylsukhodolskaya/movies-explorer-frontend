import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <li className='movies__item'>
      <section className='movies__item-container' aria-label="movies-item">
        <div className='movies__item-header'>
          <div className='movies__item-header-info'>
            <h2 className='movies__item-name'>{props.nameRU}</h2>
            <p className='movies__item-duration'>{props.duration}</p>
          </div>
          <button className='movies__item-bookmark'></button>
        </div>
        <a href="/" className='movies__item-link'>
          <img src={props.image} alt={props.nameRU} className='movies__item-image' />
        </a>
      </section>
    </li>
  )
}

export default MoviesCard;