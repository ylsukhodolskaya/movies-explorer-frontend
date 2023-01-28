import { useState, useEffect } from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import { moviesApi } from "../../../utils/MoviesApi.jsx";



function Movies() {

  //переменная состояния cards и эффект при монтировании, который будет вызывать moviesApi.getMoviesCards() и обновлять стейт-переменную из полученного значения

  const [cards, setCards] = useState([]);

  useEffect(() => {
    moviesApi.getMoviesCards()
      .then((cards) => {
        console.log ('cards', cards);
        const cardsFromBeatfilm = cards.map(item => ({
          id: item.id,
          image: `https://api.nomoreparties.co${item.image.url}`,
          nameRU: item.nameRU,
          nameEN: item.nameEN,
          duration: item.duration,
          director: item.director,
          thumbnail: `https://api.nomoreparties.co${item.image.previewUrl}`,
          movieId: item.id,
          saved: false,
          created_at: item.created_at,
          updated_at: item.updated_at,
          trailerLink: item.trailerLink,
          year: item.year,
          country: item.country,
          description: item.description
        }));
        console.log ('cardsFromBeatfilm', cardsFromBeatfilm);
        setCards(cardsFromBeatfilm);
      })
      .catch((err) => {
        console.log('//////Ошибка moviesApi.getCards//////', err);
      });
  }, [])

  return (
    <>
      <SearchForm />
      {cards ? ( <MoviesCardList cards={cards}/>) : 'запрос не задан'}
    </>
  )
}

export default Movies;