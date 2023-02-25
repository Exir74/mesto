// // const formSelector = document.querySelector('.popup__form');
// // const inputSelector = formSelector.querySelector('.popup__input');
// // const submitButtonSelector =
// //   formSelector.querySelector('.popup__button');
// // const inactiveButtonClass = formSelector.querySelector(
// //   '.popup__button_disabled'
// // );
// // const inputErrorClass = formSelector.querySelector(
// //   '.popup__input_type_error'
// // );
// // const errorClass = formSelector.querySelector(
// //   '.popup__error_visible'
// // );
// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('popup__input_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__error_visible');
// };
// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('popup__input_type_error');
//   errorElement.classList.remove('popup__error_visible');
//   errorElement.textContent = '';
// };
// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   const buttonElement = formElement.querySelector('.popup__button')
//   toggleButtonState(inputList, buttonElement)
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       toggleButtonState(inputList, buttonElement)
//       checkInputValidity(formElement, inputElement);
//     });
//   });
// };
// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__form'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement)
//   });
// };
// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;

//   })
// }
// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__button_inactive')
//   } else {
//     buttonElement.classList.remove('popup__button_inactive')
//   }
// }

// const enableValidation= ({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
// console.log(enableValidation.formSelector)

const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function disableSubmit(event) {
  event.preventDefault();
}

function enableValidation(config) {
  const formList = Array.from(
    document.querySelectorAll(config.formSelector)
  );
  formList.forEach((form) => {
    enableFormValidation(form, config);
  });
}
function enableFormValidation(form, config) {
  form.addEventListener('submit', disableSubmit);
  form.addEventListener('input', () => {
    toggleButton(form, config);
  });
  addInputListners(form, config);
  toggleButton(form, config);
}

function handleFormInput(event, config) {
  const input = event.target;
  console.log();
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    input.classList.remove(config.errorClass);
    errorElement.textContent = '';
  } else {
    input.classList.add(config.errorClass);
    input.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(
    config.inactiveButtonClass,
    !isFormValid
  );
}

function addInputListners(form, config) {
  const inputList = Array.from(
    form.querySelectorAll(config.inputSelector)
  );
  inputList.forEach((item) => {
    item.addEventListener('input', (event) => {
      handleFormInput(event, config);
    });
  });
}

enableValidation(formValidationConfig);
