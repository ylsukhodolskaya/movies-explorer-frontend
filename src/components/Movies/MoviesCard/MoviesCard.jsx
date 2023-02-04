// import React from "react";
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';


function MoviesCard(props) {
  const { card, saveMovie } = props;
  //необходимо записать преобразование длительности фильма из минут в часы и минуты
  const hours = card.duration >= 60 ? `${Math.floor(card.duration / 60)} ч ` : '';
  const minutes = card.duration === 60 ? '' : `${card.duration % 60} м`;
  const durationMovie = hours + minutes;

  const handleSaveMovie = () =>
    saveMovie(card);

  const location = useLocation();
  const classButton = card.saved ? "movies__item-bookmark movies__item-bookmark_active" : "movies__item-bookmark";

  return (
    <li className='movies__item'>
      <section className='movies__item-container' aria-label="movies-item">
        <div className='movies__item-header'>
          <div className='movies__item-header-info'>
            <h2 className='movies__item-name'>{card.nameRU}</h2>
            <p className='movies__item-duration'>{durationMovie}</p>
          </div>
          {(location.pathname === "/movies") && <button className={classButton} onClick={handleSaveMovie}></button>}
          {(location.pathname === "/saved-movies") && <button className='movies__item-bookmark movies__item-bookmark_delete-from-saved' onClick={handleSaveMovie}></button>}
        </div>
        <a href={card.trailerLink} className='movies__item-link' target='_blank' rel='noreferrer'>
          <img src={card.thumbnail} alt={card.nameRU} className='movies__item-image' />
        </a>
      </section>
    </li>
  )
}

export default MoviesCard;