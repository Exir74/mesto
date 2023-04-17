export class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleCloseIcon = this._handleCloseIcon.bind(this);
    this._handleCloseOverlay = this._handleCloseOverlay.bind(this);
  }

  open() {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _handleCloseOverlay(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  _handleCloseIcon() {
    this.close();
  }

  close() {
    this._popup.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popup
      .querySelector('.popup__close')
      .addEventListener('click', this._handleCloseIcon);
    this._popup
      .querySelector('.popup__content')
      .addEventListener('mousedown', this._handleCloseOverlay);
  }
}
