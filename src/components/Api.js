export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInformation() {
    return fetch(this.baseUrl + '/users/me', {
      method: 'GET',
      headers: {
        authorization: this.headers.authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        // console.log(result);
        return result;
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  getInitialCards() {
    return fetch(this.baseUrl + '/cards', {
      method: 'GET',
      headers: {
        authorization: this.headers.authorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  setUserInformation(name, subtitle) {
    return fetch(this.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: subtitle,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  addUserCard(name, link) {
    return fetch(this.baseUrl + '/cards', {
      method: 'POST',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
  deletUserCard(cardId) {
    fetch(this.baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  setLike(cardId) {
    return fetch(this.baseUrl + '/cards/' + cardId + '/likes', {
      method: 'PUT',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        return result;
      });
  }
  removeLike(cardId) {
    return fetch(this.baseUrl + '/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        // console.log(result);
        return result;
      });
  }
  setUserAvatar(link) {
    return fetch(this.baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
}
