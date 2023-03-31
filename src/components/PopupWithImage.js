import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);

  }
  open({name, link}) {
    this._name = name;
    this._link = link;
    this._renderUserImage(this._name, this._link);
    super.open();
  }
  close() {
    super.close();
  }
  _renderUserImage() {
    this._popup.querySelector(".popup__full-image").src =
      this._link;
    this._popup.querySelector(".popup__full-image").alt =
      this._name;
    this._popup.querySelector(".popup__image-text").textContent =
      this._name;
  }
}
