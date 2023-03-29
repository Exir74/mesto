export class UserInfo {
  constructor({ name, userInfo }) {
    this._name = name;
    this._userInfo = userInfo;
    console.log(userInfo);
  }
  setUserInfo() {
    document.querySelector('.popup__input_type_name').value =
      document.querySelector(this._name).textContent;
      console.log(this._userInfo);
    document.querySelector('.popup__input_type_subtitle').value =
      document.querySelector(this._userInfo).textContent;
  }
  getUserInfo() {
    document.querySelector(this._name).textContent =
      document.querySelector('.popup__input_type_name').value;
      document.querySelector(this._userInfo).textContent =
      document.querySelector('.popup__input_type_subtitle').value;


  }
}
