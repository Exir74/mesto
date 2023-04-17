export class UserInfo {
  constructor({ profileName, profileSubtitle, profileAvatarImage }) {
    this._profileName = profileName;
    this._profileSubtitle = profileSubtitle;
    this._profileAvatarImage = profileAvatarImage;
  }
  setUserInfo({ name, subtitle }) {
    this._profileName.textContent = name;
    this._profileSubtitle.textContent = subtitle;
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      subtitle: this._profileSubtitle.textContent,
    };
  }
  setAvatar({ avatar }) {
    this._profileAvatarImage.src = avatar;
  }
}
