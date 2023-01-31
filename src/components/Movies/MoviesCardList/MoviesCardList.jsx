import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import Preloader from "../../Preloader/Preloader";

function MoviesCardList(props) {
const{cards, searchMovies, saveMovie, preloader} = props;

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
        </ul>
      </article>
    </>

  )
}

export default MoviesCardList;