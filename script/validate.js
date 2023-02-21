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
// function enableValidation() {
//}
// console.log(formSelector)
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  //это класс  измененного INPUT
  errorClass: 'popup__error_visible'
  //это будет класс спана
});



// inputSelector.addEventListener('input', function (evt) {
//   // Выведем в консоль значение свойства validity.valid поля ввода, 
//   // на котором слушаем событие input
//   // console.log(evt.target.validity.valid);
// }); 
// const iterateForm = ()=> {
//   Array.from(formSelector).forEach((item) => {
//     console.log(item)
//     item.addEventListener('input', (evt)=>{
//       console.log(evt.target.validity.valid);
//     })
//   })
// }
// iterateForm(formSelector)