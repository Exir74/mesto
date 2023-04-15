import { Popup } from './Popup.js';
export class PopupWithConfirm extends Popup {
  constructor(popup, { handleConfirm }) {
    super(popup);
    this.handleConfirm  = handleConfirm ;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  open(item, id) {
    this._item = item;
    this._id = id;
    super.open();
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.handleConfirm(this._item, this._id);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleSubmit);
  }
}
