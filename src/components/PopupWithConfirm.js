import { Popup } from './Popup.js';
export class PopupWithConfirm extends Popup {
  constructor(popup, { handlePopupForm }) {
    super(popup);
    this.handlePopupForm = handlePopupForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._headlerClickSubmit = this._headlerClickSubmit.bind(this);
  }
  open(item) {
    super.open();
    this._remove(item)
  }
  close() {
    super.close;
  }
  _headlerClickSubmit(event) {
    event.preventDefault();
    this.handlePopupForm();
  }
  setEventListeners(item) {
    super.setEventListeners();
    this._popupForm.addEventListener(
      'submit',
      this._headlerClickSubmit
      // console.log(item)
    );
  }
}
