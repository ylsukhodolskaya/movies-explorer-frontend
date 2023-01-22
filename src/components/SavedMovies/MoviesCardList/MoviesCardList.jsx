import React from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard.jsx";

function MoviesCardList() {

  return (
    <>
      <article className='movies'>
        <ul className='movies__list'>
          <MoviesCard />
        </ul>
      </article>
      <article className="more">
        <button type="button" className="more__button">Ещё</button>
      </article>
    </>

  )
}

export default MoviesCardList;