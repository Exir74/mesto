
const popupForm = document.querySelector('.popup__form');
class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._popupForm = form;
  }
  _getInput() {
    const inputElement = Array.from(
      this._popupForm.querySelectorAll(this._inputSelector)
    );
    return inputElement;
  }
  choiseInput() {
    this._element = this._getInput();
    this._setListeners();
    this._element.forEach((item) => {
      this._input = item;
    });
    return this._element;
  }
  _setListeners() {
    this._popupForm.addEventListener('submit', (event) => {
      this._disableSubmit(event);
    });
    this._popupForm.addEventListener('input', () => {
      this._toggleButton();
    });
    this._addInputListners();
    this._toggleButton();
  }
  _addInputListners() {
    this._element.forEach((item) => {
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

  _disableSubmit(event) {
    event.preventDefault();
  }
  _toggleButton() {
    const buttonSubmit = this._popupForm.querySelector(
      this._submitButtonSelector
    );
    const isFormValid = this._popupForm.checkValidity();
    buttonSubmit.disabled = !isFormValid;
    buttonSubmit.classList.toggle(
      this._inactiveButtonClass,
      !isFormValid
    );
  }
}

export function enableValidation(data) {
  const formList = Array.from(
    document.querySelectorAll(data.formSelector)
  );
  formList.forEach((form) => {
    const formItem = new FormValidator(data, form);
    formItem.choiseInput();
  });
}
export function disableSubmitButton(popup, isFormValid) {
  const buttonSubmit = popup.querySelector(
    formValidationConfig.submitButtonSelector
  );
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(
    formValidationConfig.inactiveButtonClass,
    !isFormValid
  );
}
