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
} from '../components/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import {Api} from '../components/Api.js'

const popupImage = new PopupWithImage(imagePopup);
const createCard = (item) => {
  const card = new Card(item, imageTemplate, {
    handleCardClick: () => {
      popupImage.open(item);
      popupImage.setEventListeners();
    },
  });
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

const popupImageAdd = new PopupWithForm(cardPopup, {
  hedlerPopupForm: (items) => {
    const { [popupPlaceName]: name, [popupPlaceUrl]: link } = items;
    cardItem.renderItem([{ name, link }]);
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
    userInfoPopup.setUserInfo({
      name,
      subtitle,
    });
    popupEditForm.close();
  },
});

profileEditButton.addEventListener('click', () => {
  const userData = userInfoPopup.getUserInfo();
  profileNamePopup.value = userData.name;
  profileSubtitlePopup.value = userData.subtitle;
  popupEditForm.open();
  popupEditForm.setEventListeners();
  validatorEditProfile.toggleButton();
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
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '70f54093-bc83-47bc-b65d-881ab4394db0',
    'Content-Type': 'application/json'
  }
});
// api.getInitialCards(cardItem.renderItem)
api.getInitialCards()
// console.log(api.getInitialCards().then())
// cardItem.renderItem(api.getInitialCards());

// api.getUserInformation()
