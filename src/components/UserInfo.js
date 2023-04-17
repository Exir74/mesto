export class UserInfo {
  constructor({profileName, profileSubtitle, profileAvatarImage}) {
    this._profileName = profileName;
    this._profileSubtitle = profileSubtitle;
    this._profileAvatarImage = profileAvatarImage;
  }

  setUserInfo({name, about, avatar, _id}) {
    this._profileName.textContent = name;
    this._profileSubtitle.textContent = about;
    this._profileAvatarImage.src = avatar
    this._userId = _id
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileSubtitle.textContent,
      avatar: this._profileAvatarImage.src
    };
  }

  getUserId() {
    return this._userId
  }
}
