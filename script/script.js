let popupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileNamePopup = document.querySelector('.popup__input_name');
let profileSubtitlePopup = document.querySelector('.popup__input_subtitle');
let popupSaveButton = document.querySelector('.popup__button');
let popupForm = document.querySelector('.popup__form');

// открытие popup
function openPopup() {
  transferInPopup();
  popup.classList.add('popup_open');
}
// закрытие popup
function closePopup() {
  popup.classList.remove('popup_open');
}

// передачи данных в popup
function transferInPopup() {
  profileNamePopup.value = profileName.textContent;
  profileSubtitlePopup.value = profileSubtitle.textContent;
}

// передачи данных в form
function transferInForm(evt) {
  evt.preventDefault()
  profileName.textContent = (profileNamePopup.value);
  profileSubtitle.textContent = profileSubtitlePopup.value;
  closePopup();
}

popupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', transferInForm);
