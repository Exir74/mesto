export class Popup {
  constructor(popupSelector,) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleCloseIcon = this._handleCloseIcon.bind(this);
    this._hendleCloseOverlay = this._hendleCloseOverlay.bind(this);
  }
  open() {
    console.log(this);
    this._popupSelector.classList.add('popup_open');
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
    this._popupSelector.classList.remove('popup_open');
    this.removeEventListeners();
  }
  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popupSelector
      .querySelector('.popup__close')
      .addEventListener('click', this._handleCloseIcon);
    this._popupSelector
      .querySelector('.popup__content')
      .addEventListener('mousedown', this._hendleCloseOverlay);
  }
  removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupSelector
      .querySelector('.popup__close')
      .removeEventListener('click', this._handleCloseIcon);
    this._popupSelector
      .querySelector('.popup__content')
      .removeEventListener('mousedown', this._hendleCloseOverlay);
  }
}
