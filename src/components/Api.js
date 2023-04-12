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
        return result
      })
      .catch((reject) => {
        console.log(reject);
      })
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
        // console.log(result);
        return result
        // cardItem.renderItem(result);

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

  addUserCard(name, link){
    return fetch(this.baseUrl + '/cards', {
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
        return result
        // cardItem.renderItem([result]);

      })
      .catch((reject) => {
        console.log(reject);
      });
  }


  // getUser1() {
  //   return fetch(this.baseUrl + '/users/me', {
  //     method: 'GET',
  //     headers: {
  //       authorization: this.headers.authorization,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       return Promise.reject(`Ошибка: ${res.status}`);
  //     })
  //     .then((result) => {
  //       return (result)
  //     })
  //     .catch((reject) => {
  //       console.log(reject);
  //     })
  // }
}


