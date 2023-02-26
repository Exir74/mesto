const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
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
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
  } else {
    input.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}
function toggleButton(form, config) {
  const buttonSubmit = form.querySelector(
    config.submitButtonSelector
  );
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
