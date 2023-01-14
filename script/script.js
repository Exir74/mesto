let popupButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__form');
let profileInfo = document.querySelector('.profile-info');
let profileName = profileInfo.querySelector('.profile-info__name');
let profileSubtitle = profileInfo.querySelector('.profile-info__subtitle');
let profileNamePopup = document.querySelector('.popup__name')
let profileSubtitlePopup = document.querySelector('.popup__subtitle');
let popupSaveButton = document.querySelector('.popup__button');


function popupOpener(){
  popup.classList.remove('popup_close');
  popup.classList.add('popup_open');
  // qq = profileName.textContent;
  // profileNamePopup.setAttribute('value', qq);
  // profileNamePopup.setAttribute('value', profileName.textContent);
  // console.log(profileNamePopup);
  // console.log(profileSubtitlePopup);

}
// profileName.innerHTML= (profileNamePopup.getAttribute('value'));



function popupClose(){
  popup.classList.remove('popup_open');
  popup.classList.add('popup_close');
}

function popupSavaClose(){  
  popup.classList.remove('popup_open');
  popup.classList.add('popup_close');
console.log(profileName.textContent)
console.log(profileNamePopup.getAttribute('type', 'text'))
}

popupButton.addEventListener('click', popupOpener);
popupCloseButton.addEventListener('click', popupClose);
popupSaveButton.addEventListener('click', popupSavaClose);















