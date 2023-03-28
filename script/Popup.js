export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  open() {
    this._popupSelector.classList.add('popup_open');
  }

  _handleEscClose() {

  }
  close() {

  }
  setEventListeners(){

  }
}
