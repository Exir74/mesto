let popupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelectorAll('.popup');
let popupCloseButton = document.querySelectorAll('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileNamePopup = document.querySelector('.popup__input_type_name');
let profileSubtitlePopup = document.querySelector('.popup__input_type_subtitle');
let popupForm = document.querySelector('.popup__form');
let popupAddImageButton = document.querySelector('.profile__add-image')




// добавление картинки
let cardImage = document.querySelectorAll('.card__image');
let cardCaption = document.querySelectorAll('.card__caption'); 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

for (let i = 0; i < cardImage.length; i++ ){
  cardImage[i].setAttribute('src', initialCards[i].link);
  cardCaption[i].textContent = initialCards[i].name; 
}

// лайк
let likes = document.querySelectorAll('.card__like');
// Лайк/дизлайк
for (let i = 0; i < likes.length; i++){
  likes[i].addEventListener('click', addLike);
  function addLike() {
    likes[i].classList.toggle('card__like_active');
  }
}

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
