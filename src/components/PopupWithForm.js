import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popup, { handleFormSubmit }) {
    super(popup);
    this._handleFormSubmit = handleFormSubmit;
    this._handleSubmit = this._handleSubmit.bind(this);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList =
      this._popupForm.querySelectorAll('.popup__input');
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
  _handleSubmit(event) {
    event.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handleSubmit);
  }
  setSavingText() {
    console.log(popup);
    popup.querySelector(popupButton).textContent = 'Сохранение...';
  }
  setDefaultSavingText() {
    this._popup.querySelector(popupButton).textContent = 'Сохранить';
    
    // popup.querySelector(popupButton).textContent = 'Сохранить';
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
}
