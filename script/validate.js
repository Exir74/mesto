// const formSelector = document.querySelector('.popup__form');
// const inputSelector = formSelector.querySelector('.popup__input');
// const submitButtonSelector =
//   formSelector.querySelector('.popup__button');
// const inactiveButtonClass = formSelector.querySelector(
//   '.popup__button_disabled'
// );
// const inputErrorClass = formSelector.querySelector(
//   '.popup__input_type_error'
// );
// const errorClass = formSelector.querySelector(
//   '.popup__error_visible'
// );
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button')
  toggleButtonState(inputList, buttonElement)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      toggleButtonState(inputList, buttonElement)
      checkInputValidity(formElement, inputElement);
    });
  });
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_inactive')
  } else {
    buttonElement.classList.remove('popup__button_inactive')
  }
}

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement)
  });
};
enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
