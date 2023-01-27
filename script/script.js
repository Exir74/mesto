let popupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelectorAll('.popup');
let popupCloseButton = document.querySelectorAll('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileNamePopup = document.querySelector('.popup__input_type_name');
let profileSubtitlePopup = document.querySelector('.popup__input_type_subtitle');
let popupForm = document.querySelectorAll('.popup__form');
let popupAddImageButton = document.querySelector('.profile__add-image');
let cardImage = document.querySelectorAll('.card__image');
let cardCaption = document.querySelectorAll('.card__caption');
let likes = document.querySelectorAll('.card__like'); 
let card = document.querySelectorAll('.cards__item');
let cardTrash = document.querySelectorAll('.card__trash');
let placeName = document.querySelector('.popup__input_type_place-name');
let placeUrl = document.querySelector('.popup__input_type_place-url');
let cards = document.querySelector('.cards')
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
//добавление картинки и имя в массив
function addPlace(evt){
  evt.preventDefault()
  initialCards.unshift({name: placeName.value , link: placeUrl.value});
  closePopupAddImage();


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
for (let i = 0; i < cardImage.length; i++ ){
  cardImage[i].setAttribute('src', initialCards[i].link);
  cardCaption[i].textContent = initialCards[i].name; 
  cardImage[i].setAttribute('alt', initialCards[i].name);
}

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
popupForm[0].addEventListener('submit', transferInForm);
popupForm[1].addEventListener('submit', addPlace);

