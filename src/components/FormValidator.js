export class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._popupForm = form;
    this._formInputs = this._popupForm.querySelectorAll(
      this._inputSelector
    );
    this._buttonSubmit = this._popupForm.querySelector(
      this._submitButtonSelector
    );
  }
  _getInput() {
    const inputList = Array.from(this._formInputs);
    return inputList;
  }
  enableValidation() {
    this._elementList = this._getInput();
    this._setListeners();
  }
  _setListeners() {
    this._popupForm.addEventListener('input', () => {
      this.toggleButton();
    });
    this._addInputListners();
    this.toggleButton();
  }
  _addInputListners() {
    this._elementList.forEach((item) => {
      item.addEventListener('input', (event) => {
        this._handleFormInput(event);
      });
    });
  }
  _handleFormInput(event) {
    const input = event.target;
    const inputId = input.id;
    const errorElement = document.querySelector(`#${inputId}-error`);
    if (input.validity.valid) {
      this._hideInputErrors(input, errorElement);
    } else {
      this._showInputErrors(input, errorElement);
    }
  }
  _showInputErrors(input, errorElement) {
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideInputErrors(input, errorElement) {
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
  }

  toggleButton() {
    const isFormValid = this._popupForm.checkValidity();
    this._buttonSubmit.disabled = !isFormValid;
    this._buttonSubmit.classList.toggle(
      this._inactiveButtonClass,
      !isFormValid
    );
  }
  removeValidationErrors() {
    this._formInputs.forEach((input) => {
      const inputId = input.id;
      const errorElement = document.querySelector(
        `#${inputId}-error`
      );
      input.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
    });
  }
}
