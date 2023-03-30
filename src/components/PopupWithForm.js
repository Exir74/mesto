import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popup, { hedlerPopupForm }) {
    super(popup);
    this._hedlerPopupForm = hedlerPopupForm;
    this._headlerClickSubmit = this._headlerClickSubmit.bind(this);
  }
  open() {
    console.log(this);
    super.open();
  }
  close() {
    this._getInputValues();
    super.close();
    this._popup.querySelector('.popup__form').reset();
  }
  _headlerClickSubmit(event) {
    event.preventDefault();
    this._hedlerPopupForm(this._getInputValues());
  }
  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector('.popup__button')
      .addEventListener('click', this._headlerClickSubmit);
  }
  removeEventListeners() {
    super.removeEventListeners();
    this._popup
      .querySelector('.popup__button')
      .removeEventListener('click', this._headlerClickSubmit);
  }
  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return [this._formValues];
  }
}
