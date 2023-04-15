import { Popup } from './Popup.js';
export class PopupWithConfirm extends Popup {
  constructor(popup, { handleConfirm }) {
    super(popup);
    this.handleConfirm  = handleConfirm ;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  open(item, id) {
    this._item = item;
    this._id = id;
    super.open();
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    this.handleConfirm(this._item, this._id);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
  }
}
