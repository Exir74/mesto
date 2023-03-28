
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose= this._handleEscClose.bind(this)
  }
  open() {
    this._popupSelector.classList.add('popup_open');
    this.setEventListeners();
  }
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
    document.removeEventListener(
      'keydown',
      this._handleEscClose
    );
    
  }
  close() {
    this._popupSelector.classList.remove('popup_open');
  }
  setEventListeners() {
    document.addEventListener(
      'keydown',
      this._handleEscClose
    );
  }
}
