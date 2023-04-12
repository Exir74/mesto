export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInformation(userInfoPopup) {
    fetch(this.baseUrl + '/users/me', {
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
      .then((userInfo) => {
        userInfoPopup.setUserInfo({name:[userInfo.name], subtitle:[userInfo.about],})
      })
      .catch((reject) => {
        console.log(reject);
      })
  }

  getInitialCards(cardItem) {
    fetch(this.baseUrl + '/cards', {
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
        console.log(result);
        cardItem.renderItem(result);

      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  setUserInformation(name, subtitle) {
    fetch(this.baseUrl + '/users/me', {
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

  addUserCard(name, link, cardItem){
    fetch(this.baseUrl + '/cards', {
      method:'POST',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((result) => {
        cardItem.renderItem([result]);

      })
      .catch((reject) => {
        console.log(reject);
      });
  }


  getUser1() {
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
        return Promise.resolve(result.name)
      })
      .catch((reject) => {
        console.log(reject);
      })
  }
}


