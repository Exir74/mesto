export class UserInfo {
  constructor({ name, userInfo }) {
    this._name = name;
    this._userInfo = userInfo;
    this._profileName =  document.querySelector('.profile__name')
    this._profileSubtitle = document.querySelector('.profile__subtitle')
  }
  setUserInfo({ name, subtitle }) {
   this._profileName.textContent = name
   this._profileSubtitle.textContent = subtitle
  }

  
  getUserInfo() {
  //   this._profileName.value =
  //     document.querySelector(this._name).textContent;
  //     console.log(this._userInfo);
  //   document.querySelector(profileSubtitlePopup).value =
  //   this._profileSubtitle.textContent;
  // }
  // getUserInfo() {
  //   document.querySelector(this._name).textContent =
  //   this._profileName.value;
  //     document.querySelector(this._userInfo).textContent =
  //     this._profileSubtitle.value;

  }
}
