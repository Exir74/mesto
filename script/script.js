let popupButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');

console.log(popupButton, popup);


function popupOpener(){
  popup.classList.remove('popup_close');
  popup.classList.add('popup_open');
}
function popupClose(){
  popup.classList.remove('popup_open');
  popup.classList.add('popup_close')
}
popupButton.addEventListener('click', popupOpener);
popupCloseButton.addEventListener('click', popupClose);




