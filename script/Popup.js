const popup = '.popup'
export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    // console.log(this._popupSelector);
  }
  open() {
    this._popupSelector.classList.add('popup_open');
    this.setEventListeners();
    
  }
  _handleEscClose(event) {
    console.log(this, 'jjj');
    if (event.key === 'Escape') {
      this.close();
    }
    console.log('ddd');
    document.removeEventListener(
      'keydown',
      this._handleEscClose.bind(this))
  }
  close() {
    this._popupSelector.classList.remove('popup_open');
  }
  setEventListeners() {
    console.log(this);
    document.addEventListener(
      'keydown',
      this._handleEscClose.bind(this)
      // console.log(this)
    );
    console.log(this._handleEscClose.bind(this)===this._handleEscClose.bind(this));
  }
}
