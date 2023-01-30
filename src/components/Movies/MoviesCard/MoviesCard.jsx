import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {
  const { card, saveMovie } = props;
  //необходимо записать преобразование длительности фильма из минут в часы и минуты
  const hours = card.duration >= 60 ? `${Math.floor(card.duration / 60)} ч ` : '';
  const minutes = card.duration === 60 ? '' : `${card.duration % 60} м`;
  const durationMovie = hours + minutes;
  
const handleSaveMovie = () => 
saveMovie(card);

const classButton = card.saved ? "movies__item-bookmark movies__item-bookmark_active" : "movies__item-bookmark";

  return (
    <li className='movies__item'>
      <section className='movies__item-container' aria-label="movies-item">
        <div className='movies__item-header'>
          <div className='movies__item-header-info'>
            <h2 className='movies__item-name'>{card.nameRU}</h2>
            <p className='movies__item-duration'>{durationMovie}</p>
          </div>
          <button className={classButton} onClick={handleSaveMovie}></button>
        </div>
        <a href={card.trailerLink} className='movies__item-link'>
          <img src={card.thumbnail} alt={card.nameRU} className='movies__item-image' />
        </a>
      </section>
    </li>
  )
}

export default MoviesCard;