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
    this._fullImage.src = link;
    this._fullImage.alt = name;
    this._fullImageText.textContent = name;
    super.open();
  }
  close() {
    super.close();
  }

}
