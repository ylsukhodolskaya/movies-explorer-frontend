class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    this._movies = JSON.parse(localStorage.getItem('local-movies') || '[]');

  }

  //Ошибка 
  _parseResponse(res) {
    return res.json()
      .then((data) => {
        if (res.ok) {
          return data;
        }
        return Promise.reject(new Error(data.message))
      })
  }

  // Получение карточек
  // getMoviesCards() {
  //   return fetch(`${this._url}`, {
  //     headers: this._headers
  //   }).then(res => this._parseResponse(res));
  // }

  getMoviesCards() {
    if (this._movies.length === 0) {
      return fetch(`${this._url}`, {
        headers: this._headers
      }).then(res => this._parseResponse(res))
        .then((movies) => {
          this._movies = movies;
          localStorage.setItem('local-movies', JSON.stringify(movies));
          return movies;
        });
    }
    // return Promise.resolve(this._movies)
  }

  deleteCard(cardId) {
    this._movies = this._movies.map((movie) => {
      if (movie.id === cardId) {
        movie.saved = false
      }
      return movie;
    });
    localStorage.setItem('local-movies', JSON.stringify(this._movies));
    return this._movies;
  }

  addCard(card) {
    console.log('card', card);

    const localCard = this._movies.find((localCard) => localCard.id === card.movieId);
    console.log('localCard', localCard)
    if (localCard) {
      localCard._id = card._id;
      localCard.movieId = localCard.id;
      localCard.thumbnail = `https://api.nomoreparties.co/${localCard.image.url}`;
      localCard.saved = true;
      localStorage.setItem('local-movies', JSON.stringify(this._movies));
      return this._movies;
    }

  }
}

export const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "content-type": "application/json",
    "authorization": "",
  }
});