import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popup, { hedlerPopupForm }) {
    super(popup);
    this._hedlerPopupForm = hedlerPopupForm;
    this._headlerClickSubmit = this._headlerClickSubmit.bind(this);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList =
      this._popupForm.querySelectorAll('.popup__input');
  }
  open() {
    super.open();
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
  _headlerClickSubmit(event) {
    event.preventDefault();
    this._hedlerPopupForm(this._getInputValues());
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener(
      'submit',
      this._headlerClickSubmit
    );
  }

  _getInputValues() {
    // this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    // Все работало пока было обернуто в массив
    // return this._formValues
    return this._formValues;
  }
}
