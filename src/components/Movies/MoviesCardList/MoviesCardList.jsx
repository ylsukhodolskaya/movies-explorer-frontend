import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

function MoviesCardList(props) {
const{cards, searchMovies} = props;
  return (
    <>
      <article className='movies' aria-label="movies">
        <ul className='movies__list'>
          {cards.map((card) => <MoviesCard key={card.movieId} card={card}/>)}
        </ul>
      </article>
      <article className="more" aria-label="more">
        <button type="button" className="more__button">Ещё</button>
      </article>
    </>

  )
}

export default MoviesCardList;