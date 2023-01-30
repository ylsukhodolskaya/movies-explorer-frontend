class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
 //Ошибка 
  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка MainApi _parseResponse: ${res.status}`)
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
      headers: this._headers
    }).then(res => this._parseResponse(res));
  }

  // Редактирование информации о пользователе
  editUserInfo(data) {
    console.log('this._headers', this._headers);
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    }).then(res => this._parseResponse(res));
  }

//получение карточека
  getMoviesCard() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers
    }).then(res => this._parseResponse(res));
  }

  //удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}/movies/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(res => this._parseResponse(res));
  }

  //сохранение карточки
  addCard(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then(res => this._parseResponse(res));
  }
}





export const mainApi = new Api({
  url: "http://localhost:3002",
  headers: {
    "content-type": "application/json",
    "authorization": "",
  }
});