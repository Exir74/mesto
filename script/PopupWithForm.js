import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, { hedlerPopupForm }) {
    super(popupSelector);
    this._hedlerPopupForm = hedlerPopupForm;
  }
  open() {
    super.open();
    this.setEventListeners()
    
  }
  close() {
    super.close();
  }
  setEventListeners(){
    this._hedlerPopupForm(this._getInputValues());
    this._getInputValues()
  }
  _getInputValues() {
    this._inputList =
      this._popupSelector.querySelectorAll('.popup__input');
    this._formValues = {};
    console.log(this._formValues);
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
      return this._formValues;
    });
  }
}
