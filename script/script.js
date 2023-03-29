import {
  initialCards,
  formValidationConfig,
  imageTemplate,
  profilePopup,
  cardPopup,
  imageAddButton,
  profileEditButton,
  profileName,
  profileSubtitle,
  profileForm,
  cardForm,
  containerSelector,
  imagePopup,
} from './constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';

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
