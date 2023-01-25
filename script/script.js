let popupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileNamePopup = document.querySelector('.popup__input_type_name');
let profileSubtitlePopup = document.querySelector('.popup__input_type_subtitle');
let popupForm = document.querySelector('.popup__form');






//test (Работает нужно перенсти в норм версия)
let likes = document.querySelectorAll('.card__like');
// Лайк/дизлайк
for (let i = 0; i < likes.length; i++){
  likes[i].addEventListener('click', addLike);
  function addLike() {
    likes[i].classList.toggle('card__like_active')
  }
}

//test na verhy (Работает нужно перенсти в норм версия)





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
