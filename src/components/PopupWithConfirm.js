import { Popup } from './Popup.js';
export class PopupWithConfirm extends Popup {
  constructor(popup, { handlePopupForm }) {
    super(popup);
    this.handlePopupForm = handlePopupForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._headlerClickSubmit = this._headlerClickSubmit.bind(this);

  }
  open(item) {
    this._item = item
    super.open();
  }
  close() {
    super.close();
  }
  _headlerClickSubmit(event) {
    event.preventDefault();
    this.handlePopupForm(this._item);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener(
      'submit',
      this._headlerClickSubmit
      // console.log(this._item)
    );
  }
}
