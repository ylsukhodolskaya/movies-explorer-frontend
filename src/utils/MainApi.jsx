class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
    this._movies = JSON.parse(localStorage.getItem('saved-movies') || '[]');
  }

 //Ошибка 
  _parseResponse(res) {
    return res.json()
    .then ((data) => {
      if (res.ok) {
        return data;
      }
      return Promise.reject(new Error(data.message))
    }) 
  }

  _buildHeaders() {
    const headers = {
      ...this._headers, authorization: localStorage.getItem('jwt') || ''
    };
    return headers;
  }

  // Регистрация пользователя
  register(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => this._parseResponse(res));
  }

  // Авторизация пользователя
  login(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => this._parseResponse(res));
  }

    // Проверка токена пользователя
    setToken(token) {
      // this._headers.authorization = token;
      this._headers.authorization = `Bearer ${token}`;

    }

      // Получение информации о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._buildHeaders()
    }).then(res => this._parseResponse(res));
  }

  // Редактирование информации о пользователе
  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._buildHeaders(),
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    }).then(res => this._parseResponse(res));
  }

//получение карточека
  getMoviesCard() {
    if(this._movies.length === 0) {
      return fetch(`${this._url}/movies`, {
        headers: this._buildHeaders()
      }).then(res => this._parseResponse(res))
      .then((movies) => {
        this._movies = movies;
        localStorage.setItem('saved-movies', JSON.stringify(movies));
        return movies;
      });
    }
    return Promise.resolve(this._movies)
  }

  //удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}/movies/${cardId}`, {
      method: 'DELETE',
      headers: this._buildHeaders()
    }).then(res => this._parseResponse(res))
    .then((movie) => {
      this._movies = this._movies.filter((movie) => movie._id !== cardId);
      localStorage.setItem('saved-movies', JSON.stringify(this._movies));
      return movie;
    });
  }

  //сохранение карточки
  addCard(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._buildHeaders(),
      body: JSON.stringify(data)
    }).then(res => this._parseResponse(res))
    .then((movie) => {
      this._movies.push(movie);
      localStorage.setItem('saved-movies', JSON.stringify(this._movies));
      return movie;
    });
  }
}

export const mainApi = new Api({
  url: "http://localhost:3002",
  // url: "https://api-movies-explorer.nomoredomains.club",
  headers: {
    "content-type": "application/json",
    "authorization": "",
  }
});