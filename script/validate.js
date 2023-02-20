const formSelector = document.querySelector('.popup__form');
const inputSelector = form.querySelector('.popup__input');
const formError = form.querySelector(`.${inputSelector.id}-error`);
const submitButtonSelector = form.querySelector('.popup__button')
const inactiveButtonClass = form.querySelector('popup__button_error')
// const inputErrorClass: 'popup__input_type_error',





enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_visible'
}); 