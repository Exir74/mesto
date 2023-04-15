import { Popup } from './Popup.js';
export class PopupWithConfirm extends Popup {
  constructor(popup, { handleConfirm }) {
    super(popup);
    this.handleConfirm  = handleConfirm ;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  open(element) {
    this._element =element
    super.open();
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.handleConfirm(this._element);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleSubmit);
  }
}
