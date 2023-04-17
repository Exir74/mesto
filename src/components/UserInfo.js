export class UserInfo {
  constructor({ profileName, profileSubtitle, profileAvatarImage }) {
    this._profileName = profileName;
    this._profileSubtitle = profileSubtitle;
    this._profileAvatarImage = profileAvatarImage;
  }
  setUserInfo({ name, subtitle, avatar }) {
    this._profileName.textContent = name;
    this._profileSubtitle.textContent = subtitle;
    this._profileAvatarImage.src= avatar
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      subtitle: this._profileSubtitle.textContent,
      avatar: this._profileAvatarImage.src
    };
  }
}
