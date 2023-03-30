import { popupFullImage, popupFullText } from './constants.js';
import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector, { name, link }) {
    super(popupSelector);
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
    this._popupSelector.querySelector(popupFullImage).src =
      this._link;
    this._popupSelector.querySelector(popupFullImage).alt =
      this._name;
    this._popupSelector.querySelector(popupFullText).textContent =
      this._name;
  }
}
