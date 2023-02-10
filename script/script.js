const page = document.querySelector('.page');
const popups = page.querySelectorAll('.popup');
const profilePopup = page.querySelector('.profile-popup');
const cardPopup = page.querySelector('.card-popup');
const imagePopup = page.querySelector('.image-popup');
const imageTemplate =
  document.querySelector('#card-template').content;
const imageAddButton = page.querySelector('.profile__add-button');
const profileEditButton = page.querySelector('.profile__edit-button');
const cardImageButton = imageTemplate.querySelector('.card__button');
const popupsOverlay = page.querySelectorAll('.popup__content');
const closeButtons = document.querySelectorAll('.popup__close');
const popupsClose = page.querySelectorAll('.popup__close');
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
const initialCards = [
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
renderInitialCards();
//создание карточки
function createCard() {
 const cardElement = imageTemplate.querySelector('.card').cloneNode(true);
  addListener(cardElement);
  removeCard(cardElement);
  addLike(cardElement);
  return cardElement;
}
//берем данные из массива
function renderInitialCards() {
  initialCards.forEach((element) => {
    const cardLink = element.link;
    const cardName = element.name;
    addCardContent(cardLink, cardName, (append = true));
  });
}
//добавление 
function addCardContent(cardLink, cardName, append = true) {
  const cardElement = createCard(cardLink, cardName);
  cardElement.querySelector('.card__image').src = cardLink;
  cardElement.querySelector('.card__image').alt = cardName;
  cardElement.querySelector('.card__caption').textContent = cardName;
  if (append) {
    cards.append(cardElement);
  } else {
    cards.prepend(cardElement);
    cardElement.querySelector('.card__image').src = cardLink;
    cardElement.querySelector('.card__image').alt = cardName;
    cardElement.querySelector('.card__caption').textContent =
      cardName;
  }
}
//берем данные от пользователя
function renderUsersImages() {
  const cardLink = placeUrl.value;
  const cardName = placeName.value;
  addCardContent(cardLink, cardName, (append = false));
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
//слушатель на кнопки редактировать профиль и добавление картинки
// popupButtons.forEach((element, index) => {
//   element.addEventListener('click', () => {
//     togglePopup(index);
//   });
// });
// // слушатель закрытия картинки по нажатию на крестик
// popupsClose.forEach((element, index) => {
//   element.addEventListener('click', () => {
//     togglePopup(index);
//     popup[popupImage].classList.remove('popup_background');
//   });
// });
// // слушатель закрытия картинки по нажатию на оверлей
// popupsOverlay.forEach((element, index) => {
//   element.addEventListener('click', (event) => {
//     if (event.target === event.currentTarget) {
//       togglePopup(index);
//       popup[popupImage].classList.remove('popup_background');
//     }
//   });
// });
// слушатель сабмитов форм
// popupForms.forEach((element, index) => {
//   element.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (index === 0) {
//       changeProfile();
//     }
//     if (index === 1) {
//       initialCards.unshift({
//         name: placeName.value,
//         link: placeUrl.value,
//       });
//       addCard(placeUrl.value, placeName.value);
//       placeName.value = '';
//       placeUrl.value = '';
//     }
//     togglePopup(index);
//   });
// });
/////////////////////////////////////////////////////////////////////////////
function openPopup(popup) {
  popup.classList.add('popup_open');
}
function closePopup(popup) {
  popup.classList.remove('popup_open');
}
//слушатель кнопки формы редактировани профиля
profileForm.addEventListener('submit', (event) => {
  const popup = profileForm.closest('.popup');
  event.preventDefault();
  changeProfile();
  closePopup(popup);
});
//слушатель кнопки формы добавлени фото
cardForm.addEventListener('submit', (event) => {
  const popup = cardForm.closest('.popup');
  event.preventDefault();
  closePopup(popup);
  renderUsersImages();
  event.target.reset();
});
//закрытие попапов при нажатии на крестик
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
//закрытие попапов при нажатии на оверлей
popupsOverlay.forEach((overlay) => {
  const popup = overlay.closest('.popup');
  overlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      closePopup(popup);
    }
  });
});
// слушатель кнопок откртыия попапа добавления картинки
imageAddButton.addEventListener('click', () => {
  const popup = cardPopup;
  openPopup(popup);
});
// слушатель кнопок откртыия попапа редактирования профиля
profileEditButton.addEventListener('click', () => {
  const popup = profilePopup;
  fillProfileInputs();
  changeProfile();
  openPopup(popup);
});
// слушатель кнопок откртыия попапа fullscreen картинки
function addListener(cardElement) {
  cardElement
    .querySelector('.card__button')
    .addEventListener('click', () => {
      const popup = imagePopup;
      addNewContetntPopup(cardElement);
      openPopup(popup);
    });
}
//добавление контента в фулл скрин картинки
function addNewContetntPopup(cardElement) {
  popupFullImage.src = cardElement.querySelector('.card__image').src;
  popupFullImage.alt =
    cardElement.querySelector('.card__caption').textContent;
  popupFullText.textContent =
    cardElement.querySelector('.card__caption').textContent;
}
//удаление карточки
function removeCard(cardElement) {
  cardElement
    .querySelector('.card__trash')
    .addEventListener('click', () => {
      cardElement.remove();
    });
}
//лайк/дизлайк
function addLike(cardElement) {
  cardElement
    .querySelector('.card__like')
    .addEventListener('click', (event) => {
      event.target.classList.toggle('card__like_active');
    });
}
