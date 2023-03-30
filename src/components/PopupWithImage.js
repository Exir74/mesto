import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup, { name, link }) {
    super(popup);
    this._name = name;
    this._link = link;
  }
  open() {
    this._renderUserImage();
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
