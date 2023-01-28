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
    return Promise.reject(`Ошибка CardApi _parseResponse: ${res.status}`)
  }

  // Получение карточек
  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    }).then(res => this._parseResponse(res));
  }
}

export const cardApi = new Api({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "content-type": "application/json",
    "authorization": "",
  }
});