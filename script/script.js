import { renderCard } from './Card.js';
import { enableValidation, disableSubmitButton } from './FormValidator.js';
const page = document.querySelector('.page');
const profilePopup = page.querySelector('.profile-popup');
const cardPopup = page.querySelector('.card-popup');
const imagePopup = page.querySelector('.image-popup');
const imageTemplate =
  document.querySelector('#card-template').content;
const imageAddButton = page.querySelector('.profile__add-button');
const profileEditButton = page.querySelector('.profile__edit-button');
const cardImageButton = imageTemplate.querySelector('.card__button');
const popupOverlays = page.querySelectorAll('.popup__content');
const closeButtons = document.querySelectorAll('.popup__close');
const profileName = page.querySelector('.profile__name');
const profileSubtitle = page.querySelector('.profile__subtitle');
const profileNamePopup = page.querySelector(
  '.popup__input_type_name'
);
const profileSubtitlePopup = page.querySelector(
  '.popup__input_type_subtitle'
);
const placeName = document.querySelector(
  '.popup__input_type_place-name'
);
const placeUrl = document.querySelector(
  '.popup__input_type_place-url'
);
const profileForm = document.forms['profile-form'];
const cardForm = document.forms['card-form'];
const popupFullImage = document.querySelector('.popup__full-image');
const popupFullText = document.querySelector('.popup__image-text');
const buttonAddImage = page.querySelector('.profile__add-button');
const buttonEditProfile = page.querySelector('.profile__edit-button');
const cards = page.querySelector('.cards');
const card = page.querySelector('.card');
// renderInitialCards();
// создание карточки
// function createCard(cardLink, cardName) {
//   const cardElement = imageTemplate
//     .querySelector('.card')
//     .cloneNode(true);
//   const cardImage = cardElement.querySelector('.card__image');
//   const cardCaption = cardElement.querySelector('.card__caption');
//   setImageClickListener(cardElement, cardCaption);
//   removeCard(cardElement);
//   addLike(cardElement);
//   cardImage.src = cardLink;
//   cardImage.alt = cardName;
//   cardCaption.textContent = cardName;
//   return cardElement;
// }
// берем данные из массива
// function renderInitialCards() {
//   initialCards.forEach((element) => {
//     const cardLink = element.link;
//     const cardName = element.name;
//     addCardContent(cardLink, cardName);
//   });
// }
// добавление
// function addCardContent(cardLink, cardName, append = true) {
//   const cardElement = createCard(cardLink, cardName);
//   if (append) {
//     cards.append(cardElement);
//   } else {
//     cards.prepend(cardElement);
//   }
// }
import { formValidationConfig } from './FormValidator.js';

enableValidation(formValidationConfig);

// берем данные от пользователя
function renderUsersImages() {
  const cardLink = placeUrl.value;
  const cardName = placeName.value;
  renderCard(cardLink, cardName, true);
  // addCardContent(cardLink, cardName, false);
}
// заполнение данных в профиле
function changeProfile() {
  profileName.textContent = profileNamePopup.value;
  profileSubtitle.textContent = profileSubtitlePopup.value;
}
// заполнение данных в popup
function fillProfileInputs() {
  profileNamePopup.value = profileName.textContent;
  profileSubtitlePopup.value = profileSubtitle.textContent;
}
function openPopup(popup) {
  popup.classList.add('popup_open');
  listenEscape(popup);
}
function closePopup(popup) {
  popup.classList.remove('popup_open');
  page.removeEventListener('keydown', handlerPopupEscape);
}
//слушатель кнопки формы редактировани профиля
profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  changeProfile();
  closePopup(profilePopup);
});
//слушатель кнопки формы добавлени фото
cardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  closePopup(cardPopup);
  renderUsersImages();
  event.target.reset();
});
//закрытие попапов при нажатии на крестик
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
//закрытие попапов при нажатии на оверлей
popupOverlays.forEach((overlay) => {
  const popup = overlay.closest('.popup');
  overlay.addEventListener('mousedown', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});
//слушатель закрытия по escape
const listenEscape = () => {
  page.addEventListener('keydown', handlerPopupEscape);
};
//обработчик закрытия по esc
const handlerPopupEscape = (event) => {
  if (event.key === 'Escape') {
    const popupElement = page.querySelector('.popup_open');
    closePopup(popupElement);
  }
};

// обработчик кнопок откртыия попапа добавления картинки
imageAddButton.addEventListener('click', () => {
  openPopup(cardPopup);
  const isFormValid = false;
  disableSubmitButton(cardPopup, isFormValid);
});
// обработчик кнопок откртыия попапа редактирования профиля
profileEditButton.addEventListener('click', () => {
  fillProfileInputs();
  openPopup(profilePopup);
  const isFormValid = true;
  disableSubmitButton(profilePopup, isFormValid);
});
// // обработчик кнопки откртыия попапа fullscreen картинки
// function setImageClickListener(cardElement, cardCaption) {
//   cardElement
//     .querySelector('.card__button')
//     .addEventListener('click', () => {
//       addNewContetntPopup(cardElement, cardCaption);
//       openPopup(imagePopup);
//     });
// }
// // добавление контента в фулл скрин картинки
// function addNewContetntPopup(cardElement, cardCaption) {
//   popupFullImage.src = cardElement.querySelector('.card__image').src;
//   popupFullImage.alt = cardCaption.textContent;
//   popupFullText.textContent = cardCaption.textContent;
// }
//удаление карточки
// function removeCard(cardElement) {
//   cardElement
//     .querySelector('.card__trash')
//     .addEventListener('click', () => {
//       cardElement.remove();
//     });
// }
//лайк/дизлайк
// function addLike(cardElement) {
//   cardElement
//     .querySelector('.card__like')
//     .addEventListener('click', (event) => {
//       event.target.classList.toggle('card__like_active');
//     });
// }

renderCard(false);
