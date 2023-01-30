import { useState, useEffect } from 'react';
import SearchForm from "../../Movies/SearchForm/SearchForm.jsx";
import MoviesCardList from "../../Movies/MoviesCardList/MoviesCardList.jsx";
import { mainApi } from '../../../utils/MainApi.jsx';


function SavedMovies() {

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
          console.log ('333333333serverCards', serverCards);
          localStorage.setItem('saved-movies', JSON.stringify(serverCards.data));
          setCards(serverCards.data);
          setCardsFiltetred(serverCards.data);
          //прелоалер
        })
    } else {
      setCards(savedMovies);
      setCardsFiltetred(savedMovies);
      //прелоадер
    }
  }, [])

  const saveMovie = (card) => {

    mainApi.deleteCard(card._id)
      .then(() => {
        setCardsFiltetred((savedCards) => {
          const localSavedCards = JSON.parse(localStorage.getItem('local-movies') || []);
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


  return (
    <>
      <SearchForm
        filterCards={filterCards}
        page='saved-movies'
        required={false}
      />
      <MoviesCardList
        cards={cardsFiltered}
        // searchMovies={searchMovies}
        saveMovie={saveMovie} 
        />
    </>
  )
}

export default SavedMovies;