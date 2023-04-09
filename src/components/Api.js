export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    // console.log(this.baseUrl)
    // console.log(this.headers.authorization)
  }

  getUserInformation() {
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
        // console.log(userInfo);
        // console.log(JSON.parse(userInfo));

        return userInfo;
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  getInitialCards() {
    fetch(this.baseUrl + '/cards', {
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
        console.log(JSON.parse(result));
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
}
