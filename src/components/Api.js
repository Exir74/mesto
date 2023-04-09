export class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
    // console.log(this.baseUrl)
    // console.log(this.headers.authorization)
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
        userInfoPopup._profileName.textContent = userInfo.name;
        userInfoPopup._profileSubtitle.textContent = userInfo.about;
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  getInitialCards(cardItem) {
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
        cardItem.renderItem(result);
        return result;
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  setUserInformation(userInfoPopup) {
    fetch(this.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Marie Skłodowska Curie',
        about: 'Physicist and Chemist',
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((userInfo) => {
        // userInfo.name = userInfoPopup._profileName.innerText;
        // userInfo.about = userInfoPopup._profileSubtitle.innerText;
        console.log(userInfo.name);
        console.log(userInfoPopup._profileName.textContent);
        return userInfo;
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
}
