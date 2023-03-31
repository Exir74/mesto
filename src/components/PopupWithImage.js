import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._fullImage = this._popup.querySelector('.popup__full-image');
    this._fullImageText = this._popup.querySelector(
      '.popup__image-text'
    );
  }
  open({ name, link }) {
    this._name = name;
    this._link = link;
    this._renderUserImage(this._name, this._link);
    super.open();
  }
  close() {
    super.close();
  }
  _renderUserImage() {
    this._fullImage.src = this._link;
    this._fullImage.alt = this._name;
    this._fullImageText.textContent = this._name;
  }
}
