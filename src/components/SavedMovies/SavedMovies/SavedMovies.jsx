import { useState, useEffect } from 'react';
import SearchForm from "../../Movies/SearchForm/SearchForm.jsx";
import MoviesCardList from "../../Movies/MoviesCardList/MoviesCardList.jsx";
import { mainApi } from '../../../utils/MainApi.jsx';
//отображение кнопки ЕЩЕ
const renderCards = () => {
  const render = {
    start: 12,
    load: 3
  };
  if (window.innerWidth < 1001) {
    render.start = 8;
    render.load = 2;
  }
  if (window.innerWidth < 706) {
    render.start = 5;
    render.load = 1;
  }
  return render;
}

function SavedMovies() {

  //===========================
  //отображение кнопки ЕЩЕ
  const render = renderCards();
  const [renderCounter, setRenderCounter] = useState(render.start);

  const changeCounter = () => {
    const render = renderCards();
    setRenderCounter(renderCounter + render.load);
  }
  //===========================


  const [cards, setCards] = useState([]);
  const [cardsFiltered, setCardsFiltetred] = useState([]);
  // const [searchMovies, setSearchMovies] = useState(false);

  const filterCards = (search) => {
    //вставить фильтра карточек по названию и продолжительности
    // setSearchMovies(true);
    setCardsFiltetred(cards.filter((card) => {
      const nameMovie = card.nameRU.toLowerCase().includes(search.name.toLowerCase());
      const durationMovieShort = search.durationMovieShort ? card.duration <= 40 : true;
      return nameMovie && durationMovieShort;
    }))
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    mainApi.setToken(token);
    //прелоадер
    const savedMovies = JSON.parse(localStorage.getItem('saved-movies') || '[]');
    if (savedMovies.length === 0) {
      mainApi.getMoviesCard()
        .then((serverCards) => {
          console.log('333333333serverCards', serverCards);
          localStorage.setItem('saved-movies', JSON.stringify(serverCards));
          setCards(serverCards);
          setCardsFiltetred(serverCards);
          //прелоалер
        })
    } else {
      setCards(savedMovies);
      setCardsFiltetred(savedMovies);
      setRenderCounter(render.start);
      //прелоадер
    }
  }, [])

  const saveMovie = (card) => {

    mainApi.deleteCard(card._id)
      .then(() => {
        setCardsFiltetred((savedCards) => {
          const localSavedCards = JSON.parse(localStorage.getItem('local-movies') || '[]');
          const updateLocalSavedCards = localSavedCards.map((movie) => {
            if (movie.id === card.movieId) {
              movie.saved = false;
            }
            return movie;
          })
          localStorage.setItem('local-movies', JSON.stringify(updateLocalSavedCards))
          const filteredSavedCards = savedCards.filter(savedCard => savedCard._id !== card._id);
          localStorage.setItem('saved-movies', JSON.stringify(filteredSavedCards));
          return filteredSavedCards;
        })
      })
  }

  console.log('cardsFiltered', cardsFiltered);

  return (
    <>
      <SearchForm
        filterCards={filterCards}
        page='saved-movies'
        required={false}
      />
      <MoviesCardList
        cards={cardsFiltered.filter((_, i) => i < renderCounter)}
        // searchMovies={searchMovies}
        saveMovie={saveMovie}
      />
      {(cardsFiltered.length > renderCounter) && <article className="more" aria-label="more">
        <button type="button" className="more__button" onClick={changeCounter}>Ещё</button>
      </article>}
    </>
  )
}

export default SavedMovies;