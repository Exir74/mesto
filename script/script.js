let popupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelectorAll('.popup');
let popupCloseButton = document.querySelectorAll('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileNamePopup = document.querySelector('.popup__input_type_name');
let profileSubtitlePopup = document.querySelector('.popup__input_type_subtitle');
let popupForm = document.querySelector('.popup__form');
let popupAddImageButton = document.querySelector('.profile__add-image')




//test
let cardLike = document.querySelectorAll('.card__like')
console.log(popup)
//test na verhy

// открытие popup доабвления картинки
function openPopupAddImage() {
  transferInPopup();
  popup[1].classList.add('popup_open');
}
// закрытие popup доабвления картинки
function closePopupAddImage() {
  popup[1].classList.remove('popup_open');
}




// открытие popup
function openPopup() {
  transferInPopup();
  popup[0].classList.add('popup_open');
}
// закрытие popup
function closePopup() {
  popup[0].classList.remove('popup_open');
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
popupAddImageButton.addEventListener('click', openPopupAddImage);
popupCloseButton[0].addEventListener('click', closePopup);
popupCloseButton[1].addEventListener('click', closePopupAddImage);
popupForm.addEventListener('submit', transferInForm);
