import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import Preloader from "../../Preloader/Preloader";

function MoviesCardList(props) {
  const { cards, searchMovies, saveMovie, preloader } = props;

  return (
    <>
      <article className='movies' aria-label="movies">
        {preloader && <Preloader />}
        <ul className='movies__list'>
          {cards.map((card) =>
            <MoviesCard
              key={card.movieId}
              card={card}
              saveMovie={saveMovie}
            />
          )}
          {cards.length === 0 &&
            <li className='movies__container-not-found'>
              <span className='movies__not-found'>Ничего не найдено</span></li>}
        </ul>
      </article>
    </>

  )
}

export default MoviesCardList;