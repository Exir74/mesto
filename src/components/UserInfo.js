export class UserInfo {
  constructor({profileName, profileSubtitle}) {
    this._profileName = profileName
    this._profileSubtitle = profileSubtitle
   
  }
  setUserInfo({ name, subtitle,}) {
      this._profileName.textContent = name;
      this._profileSubtitle.textContent = subtitle;
  }
  getUserInfo() {
    const userData = {
      name: this._profileName.textContent,
      subtitle: this._profileSubtitle.textContent,
    };
    return userData
  }

}
