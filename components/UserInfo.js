import { profileNamePopup, profileSubtitlePopup } from "./constants.js";

export class UserInfo {
  constructor({ name, userInfo }) {
    this._name = name;
    this._userInfo = userInfo;
    console.log(userInfo);
  }
  setUserInfo() {
    document.querySelector(profileNamePopup).value =
      document.querySelector(this._name).textContent;
      console.log(this._userInfo);
    document.querySelector(profileSubtitlePopup).value =
      document.querySelector(this._userInfo).textContent;
  }
  getUserInfo() {
    document.querySelector(this._name).textContent =
      document.querySelector(profileNamePopup).value;
      document.querySelector(this._userInfo).textContent =
      document.querySelector(profileSubtitlePopup).value;


  }
}
