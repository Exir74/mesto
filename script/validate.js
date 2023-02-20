// const formList = document.querySelectorAll('.popup__form');
// const inputSelector = document.querySelectorAll('.popup__input') ;
// const submitButtonSelector = document
// function enableValidation(){};
// enableValidation({
//   formSelector: Array.from(document.querySelectorAll('.popup__form')),
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
// console.log(formList)

const enableValidation = () =>{
  const formList = Array.from(document.querySelectorAll('.popup__form'))
  console.log(formList)
}
enableValidation()