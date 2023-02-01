const popupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelectorAll('.popup');
const popupCloseButton = document.querySelectorAll('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileNamePopup = document.querySelector('.popup__input_type_name');
let profileSubtitlePopup = document.querySelector('.popup__input_type_subtitle');
const popupForm = document.querySelectorAll('.popup__form');
const popupAddImageButton = document.querySelector('.profile__add-image');
let cardImage = document.querySelectorAll('.card__image');
let cardCaption = document.querySelectorAll('.card__caption');
const likes = document.querySelectorAll('.card__like'); 
const card = document.querySelectorAll('.cards__item');
const cardTrash = document.querySelectorAll('.card__trash');
const placeName = document.querySelector('.popup__input_type_place-name');
const placeUrl = document.querySelector('.popup__input_type_place-url');
const cards = document.querySelector('.cards');
const popupContent = document.querySelectorAll('.popup__content');
let cardFullscreen = document.querySelectorAll('.card__button');
let initialCards = [
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

//добавление картинок из массива
addImage();

//добавление картинки и имя в массив
function addPlace(evt){
  evt.preventDefault();
  initialCards.unshift({name: placeName.value , link: placeUrl.value});
  togglePopupImage();
  addImage();
}

//удаление картинки
for (let i = 0; i < card.length; i++){
  cardTrash[i].addEventListener('click', removeCard);
  function removeCard (){
    card[i].remove();
    initialCards.splice(i, 1);
    console.log(initialCards)
  }
}

// добавление картинки и описания из массива
function addImage(){ 
for (let i = 0; i < cardImage.length; i++ ){
  cardImage[i].setAttribute('src', initialCards[i].link);
  cardCaption[i].textContent = initialCards[i].name; 
  cardImage[i].setAttribute('alt', initialCards[i].name);
}
}
// Лайк/дизлайк
for (let i = 0; i < likes.length; i++){
  likes[i].addEventListener('click', addLike);
  function addLike() {
    likes[i].classList.toggle('card__like_active');
  }
}

//Открытие/закрытие попапа fullscreen картинки 
for (let i = 0; i< cardFullscreen.length; i++){
  cardFullscreen[i].addEventListener('click', toggleFullscreen);
  function toggleFullscreen() {
    popup[2].classList.toggle('popup_open')
  }
}


//toggle попап редактирования профиля
function togglePopupProfile() {
  transferInPopup();
  popup[0].classList.toggle('popup_open');
}

//toggle попап добаваление картинки
function togglePopupImage() {
  popup[1].classList.toggle('popup_open');
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
  togglePopupProfile();
}

// закрытие по клику overlay профиля
function overlayClickProfile(event){
if (event.target === event.currentTarget) {
  togglePopupProfile();
}
}

// закрытие по клику overlay картинки
function overlayClickImage(event){
  if (event.target === event.currentTarget) {
    togglePopupImage();
  }
  }

  // закрытие по клику overlay fullscreen картинки
function overlayClickFullscreenImage(event){
  console.log('dd')
  if (event.target === event.currentTarget) {
    toggleFullscreen();

  }
  }


popupButton.addEventListener('click', togglePopupProfile);
popupAddImageButton.addEventListener('click', togglePopupImage);
popupCloseButton[0].addEventListener('click', togglePopupProfile);
popupCloseButton[1].addEventListener('click', togglePopupImage);
popupCloseButton[2].addEventListener('click', toggleFullscreen);
popupForm[0].addEventListener('submit', transferInForm);
popupForm[1].addEventListener('submit', addPlace);
popupContent[0].addEventListener('click', overlayClickProfile);
popupContent[1].addEventListener('click', overlayClickImage);