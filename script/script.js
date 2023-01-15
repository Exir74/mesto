let popupButton = document.querySelector('.edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__form');
let profileInfo = document.querySelector('.profile-info');
let profileName = document.querySelector('.profile-info__name');
let profileSubtitle = document.querySelector('.profile-info__subtitle');
let profileNamePopup = document.querySelector('.popup__name');
let profileSubtitlePopup = document.querySelector('.popup__subtitle');
let popupSaveButton = document.querySelector('.popup__button');

function popupOpener() {
  popup.classList.remove('popup_close');
  popup.classList.add('popup_open');
  profileNamePopup.setAttribute('value', profileName.textContent);
  profileSubtitlePopup.setAttribute('value', profileSubtitle.textContent);
}

function popupClose() {
  popup.classList.remove('popup_open');
  popup.classList.add('popup_close');
}

function popupSavaClose(evt) {
  evt.preventDefault();
  popup.classList.remove('popup_open');
  popup.classList.add('popup_close');
  profileName.textContent = profileNamePopup.value;
  profileSubtitle.textContent = profileSubtitlePopup.value;
}

popupButton.addEventListener('click', popupOpener);
popupCloseButton.addEventListener('click', popupClose);
popupSaveButton.addEventListener('click', popupSavaClose, Boolean);
