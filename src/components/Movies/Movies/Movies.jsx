import { useState, useEffect } from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import { moviesApi } from "../../../utils/MoviesApi.jsx";
import { mainApi } from '../../../utils/MainApi.jsx';



function Movies() {

  //переменная состояния cards и эффект при монтировании, который будет вызывать moviesApi.getMoviesCards() и обновлять стейт-переменную из полученного значения

  const [cards, setCards] = useState([]);
  const [cardsFiltered, setCardsFiltetred] = useState([]);
  const [searchMovies, setSearchMovies] = useState(false);

  const filterCards = (search) => {
    //вставить фильтра карточек по названию и продолжительности
    setSearchMovies(true);
    const filter = (cards) => {
      setCardsFiltetred(cards.filter((card) => {
        const nameMovie = card.nameRU.toLowerCase().includes(search.name.toLowerCase());
        const durationMovieShort = search.durationMovieShort ? card.duration <= 40 : true;
        return nameMovie && durationMovieShort;
      }))
    }

    if (cards.length === 0) {
      const localMovies = JSON.parse(localStorage.getItem('local-movies') || '[]');
      if (localMovies.length === 0) {
        const token = localStorage.getItem('jwt');
        mainApi.setToken(token);
        Promise.all([moviesApi.getMoviesCards(), mainApi.getMoviesCard()])
          .then(([beatCards, localCards]) => {
            const mergeCards = beatCards.map(card => {
              const localCard = localCards.find((localCard) => localCard.movieId === card.id);
              card._id = localCard !== undefined ? localCard._id : '';
              card.movieId = card.id;
              card.thumbnail = `https://api.nomoreparties.co/${card.image.url}`;
              card.saved = localCard !== undefined;
              return card;
            })
            setCards(mergeCards);
            //добавить фильтр на mergeCards
            filter(mergeCards);
            localStorage.setItem('local-movies', JSON.stringify(mergeCards))
          })
      } else {
        setCards(localMovies);
        //добавить фильтр на localMovies;
        filter(localMovies);
      }
    } else {
      //добавить фильтр на cards
      filter(cards);
    }
  }





  return (
    <>
      <SearchForm
        filterCards={filterCards}
        page='movies'
      />
      {/* {cards ? ( <MoviesCardList cards={cards}/>) : 'запрос не задан'} */}
      <MoviesCardList
        cards={cardsFiltered}
        searchMovies={searchMovies}
      />

    </>
  )
}

export default Movies;