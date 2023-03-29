import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { hedlerPopupForm }) {
    super(popupSelector);
    this._hedlerPopupForm = hedlerPopupForm;
  }
  open() {
    super.open();
    console.log('kk');
  }
  close() {
    this._getInputValues();
    super.close();
    this._popupSelector
      .querySelector('.popup__button')
      .removeEventListener('click', this._hedlerPopupForm);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupSelector
      .querySelector('.popup__button')
      .addEventListener('click', this._hedlerPopupForm);
  }
  _getInputValues() {
    this._inputList =
      this._popupSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    console.log(this._formValues);
    return this._formValues;
  }
}
