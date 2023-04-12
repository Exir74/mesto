import { Popup } from './Popup.js';
export class PopupWithConfirm extends Popup {
  constructor(popup, { handlePopupForm }) {
    super(popup);
    this.handlePopupForm = handlePopupForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._headlerClickSubmit = this._headlerClickSubmit.bind(this);

  }
  open(item, id) {
    this._item = item
    this._id = id
    super.open();
  }
  close() {
    super.close();
  }
  _headlerClickSubmit(event) {
    event.preventDefault();
    console.log(this._id);
    this.handlePopupForm(this._item, this._id);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener(
      'submit',
      this._headlerClickSubmit
    );
  }
}
