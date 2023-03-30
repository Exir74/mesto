
export class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleCloseIcon = this._handleCloseIcon.bind(this);
    this._hendleCloseOverlay = this._hendleCloseOverlay.bind(this);
  }
  open() {
    // console.log(this._popup);
    this._popup.classList.add('popup_open');
    this.setEventListeners();
  }
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }
  _hendleCloseOverlay(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  _handleCloseIcon() {
    this.close();
  }

  close() {
    this._popup.classList.remove('popup_open');
    this.removeEventListeners();
  }
  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup
      .querySelector('.popup__close')
      .addEventListener('click', this._handleCloseIcon);
    this._popup
      .querySelector('.popup__content')
      .addEventListener('mousedown', this._hendleCloseOverlay);
  }
  removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup
      .querySelector('.popup__close')
      .removeEventListener('click', this._handleCloseIcon);
    this._popup
      .querySelector('.popup__content')
      .removeEventListener('mousedown', this._hendleCloseOverlay);
  }
}
