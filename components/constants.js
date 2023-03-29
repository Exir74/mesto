 export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
 export const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};
 export const imageTemplate =
  document.querySelector('#card-template').content;
 export const page = document.querySelector('.page');
 export const profilePopup = page.querySelector('.profile-popup'); 
 export const cardPopup = page.querySelector('.card-popup');
 export const imageAddButton = page.querySelector('.profile__add-button');
 export const profileEditButton = page.querySelector('.profile__edit-button');
 export const popupOverlays = page.querySelectorAll('.popup__content');
 export const popupOverlay = page.querySelector('.popup__content');
 export const closeButtons = document.querySelectorAll('.popup__close');
 export const closeButton = document.querySelector('.popup__close');
 export const profileName = '.profile__name';
 export const profileSubtitle = '.profile__subtitle';
//  export const profileName = page.querySelector('.profile__name');
//  export const profileSubtitle = page.querySelector('.profile__subtitle');
 export const profileNamePopup = page.querySelector(
  '.popup__input_type_name'
);
 export const profileSubtitlePopup = page.querySelector(
  '.popup__input_type_subtitle'
);
 export const placeName = document.querySelector(
  '.popup__input_type_place-name'
);
 export const placeUrl = document.querySelector(
  '.popup__input_type_place-url'
);
 export const profileForm = document.forms['profile-form'];
 export const cardForm = document.forms['card-form'];
 export const cards = page.querySelector('.cards');
 export const containerSelector = '.cards'
 export const imagePopup = page.querySelector('.image-popup');
 export const popupFullImage = page.querySelector('.popup__full-image');
 export const popupFullText = page.querySelector('.popup__image-text');
 export const popup = '.popup'
