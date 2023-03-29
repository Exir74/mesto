import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { hedlerPopupForm }) {
    super(popupSelector);
    this._hedlerPopupForm = hedlerPopupForm;
    this._headlerClickSubmit = this._headlerClickSubmit.bind(this);
  }
  open() {
    super.open();
  }
  close() {
    this._getInputValues();
    super.close();
    this._popupSelector.querySelector('.popup__form').reset()
  }
  _headlerClickSubmit(event) {
    event.preventDefault();
    this._hedlerPopupForm(this._getInputValues());
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupSelector
      .querySelector('.popup__button')
      .addEventListener('click', this._headlerClickSubmit);
  }
  removeEventListeners() {
    super.removeEventListeners();
    this._popupSelector
      .querySelector('.popup__button')
      .removeEventListener('click', this._headlerClickSubmit);
  }
  _getInputValues() {
    this._inputList =
      this._popupSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
}
