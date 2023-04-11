import './index.css';
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
  cardContainer,
  imagePopup,
  popupPlaceName,
  popupPlaceUrl,
  profileNamePopup,
  popupName,
  poppupSubtitle,
  profileSubtitlePopup,
  popupConfirmSelector,
} from '../components/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { Api } from '../components/Api.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '70f54093-bc83-47bc-b65d-881ab4394db0',
  },
});
api.delet();

const popupConfirm = new PopupWithConfirm(popupConfirmSelector, {
  handlePopupForm: (item) => {
    // item.remove();
    console.log(item, 'FORM');
  },
});
const popupImage = new PopupWithImage(imagePopup);
const createCard = (item) => {
  const card = new Card(
    item,
    imageTemplate,
    {
      handleCardClick: () => {
        popupImage.open(item);
        popupImage.setEventListeners();
      },
    },
    {
      handleTrashClick: (item) => {
        console.log(item);
        popupConfirm.open();
        popupConfirm.setEventListeners();
      },
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
};
const cardItem = new Section(
  {
    data: [],
    renderer: (item) => {
      const cardElement = createCard(item);
      cardItem.addItem(cardElement);
    },
  },
  cardContainer
);

// cardItem.renderItem(initialCards);
api.getInitialCards(cardItem);

const popupImageAdd = new PopupWithForm(cardPopup, {
  hedlerPopupForm: (items) => {
    const { [popupPlaceName]: name, [popupPlaceUrl]: link } = items;
    api.addUserCard(name, link, cardItem);
    popupImageAdd.close();
  },
});
imageAddButton.addEventListener('click', () => {
  popupImageAdd.open();
  popupImageAdd.setEventListeners();
  validatorAddCard.toggleButton();
});

const userInfoPopup = new UserInfo({ profileName, profileSubtitle });
const popupEditForm = new PopupWithForm(profilePopup, {
  hedlerPopupForm: (items) => {
    const { [popupName]: name, [poppupSubtitle]: subtitle } = items;
    api.setUserInformation(name, subtitle);
    userInfoPopup.setUserInfo({
      name,
      subtitle,
    });
    popupEditForm.close();
  },
});

api.getUserInformation(userInfoPopup);
profileEditButton.addEventListener('click', () => {
  const userData = userInfoPopup.getUserInfo();
  profileNamePopup.value = userData.name;
  profileSubtitlePopup.value = userData.subtitle;
  popupEditForm.open();
  popupEditForm.setEventListeners();
  validatorEditProfile.toggleButton();
  // api.setUserInform
});

const validatorEditProfile = new FormValidator(
  formValidationConfig,
  profileForm
);
const validatorAddCard = new FormValidator(
  formValidationConfig,
  cardForm
);
validatorEditProfile.enableValidation();
validatorAddCard.enableValidation();

// fetch('https://nomoreparties.co/v1/cohort-64/users/me', {
//   method: 'GET',
//   headers: {
//     authorization: '70f54093-bc83-47bc-b65d-881ab4394db0'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });

// api.getInitialCards(cardItem.renderItem)
