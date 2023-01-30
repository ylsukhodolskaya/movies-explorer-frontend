import { useState } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard.jsx";
import Preloader from "../../Preloader/Preloader";

// const renderCards = () => {
//   const render = {
//     start: 12, 
//     load: 3
//   };
//   if(window.innerWidth < 1001) {
//     render.start = 8;
//     render.load = 2;
//   } 
//   if(window.innerWidth < 706) {
//     render.start = 5;
//     render.load = 1;
//   } 
//   return render;
// }



function MoviesCardList(props) {
const{cards, searchMovies, saveMovie, preloader} = props;

// const render = renderCards;
// const [renderCounter, setRenderCounter] = useState(render.start);

// const changeCounter = () => {
//   const render = renderCards();
//   setRenderCounter(renderCounter+render.load);
// }

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
      {/* {(cards.length > renderCounter) && <article className="more" aria-label="more">
         <button type="button" className="more__button" onClick={changeCounter}>Ещё</button>
      </article>} */}
    </>

  )
}

export default MoviesCardList;