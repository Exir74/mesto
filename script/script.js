import { Card } from './Card.js';
import {
  initialCards,
  formValidationConfig,
  imageTemplate,
  page,
  profilePopup,
  cardPopup,
  imageAddButton,
  profileEditButton,
  popupOverlays,
  closeButtons,
  profileName,
  profileSubtitle,
  profileNamePopup,
  profileSubtitlePopup,
  placeName,
  placeUrl,
  profileForm,
  cardForm,
  cards,
  containerSelector,
  popup,
  imagePopup,
} from './constants.js';
import { FormValidator } from './FormValidator.js';
import { UserInfo } from './UserInfo.js';
import { PopupWithForm } from './PopupWithForm.js';
import { PopupWithImage } from './PopupWithImage.js';
import { Section } from './Section.js';

// берем данные от пользователя
function renderUsersImages() {
  const cardLink = placeUrl.value;
  const cardName = placeName.value;
  return [{ name: cardName, link: cardLink }];
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

//слушатель кнопки формы редактировани профиля
profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  changeProfile();
  closePopup(profilePopup);
});

//очистка полей попапа добавления картинки
function cleanInput() {
  placeName.value = '';
  placeUrl.value = '';
}

imageAddButton.addEventListener('click', () => {
  const popupImageAdd = new PopupWithForm(cardPopup, {
    hedlerPopupForm: (data) => {
      popupImageAdd.close();
      const renderUserCard = new Section(
        {
          data,
          renderer: (item, isInitialCard) => {
            const {
              ['popup-place-name']: name,
              ['popup-place-url']: link,
            } = item;
            const card = new Card({ name, link }, imageTemplate);
            const cardElement = card.generateCard();
            renderUserCard.addItem(cardElement, isInitialCard);
            const popupImage = new PopupWithImage(imagePopup, {
              name,
              link,
            });
            cardElement
              .querySelector('.card__image')
              .addEventListener('click', () => {
                popupImage.open();
              });
          },
        },
        containerSelector
      );
      renderUserCard.renderItem(false);
    },
  });
  popupImageAdd.open();
  validatorAddCard.toggleButton();
  validatorAddCard.removeValidationErrors(cardPopup);
});

profileEditButton.addEventListener('click', () => {
  const addUserInfo = new UserInfo({
    name: profileName,
    userInfo: profileSubtitle,
  });
  addUserInfo.setUserInfo();

  const popupEditForm = new PopupWithForm(profilePopup, {
    hedlerPopupForm: (data) => {
      addUserInfo.getUserInfo();
      popupEditForm.close();
    },
  });
  popupEditForm.open();
  validatorEditProfile.toggleButton();
  validatorEditProfile.removeValidationErrors(profilePopup);
});

const renderInitialCard = new Section(
  {
    data: initialCards,
    renderer: (item, isInitialCard) => {
      const card = new Card(item, imageTemplate);
      const cardElement = card.generateCard();
      renderInitialCard.addItem(cardElement, isInitialCard);
      const popupImage = new PopupWithImage(imagePopup, item);
      cardElement
        .querySelector('.card__image')
        .addEventListener('click', () => {
          popupImage.open();
        });
    },
  },
  containerSelector
);
renderInitialCard.renderItem(true);

const validatorEditProfile = new FormValidator(
  formValidationConfig,
  profileForm
);
validatorEditProfile.enableValidation();
const validatorAddCard = new FormValidator(
  formValidationConfig,
  cardForm
);
validatorAddCard.enableValidation();
