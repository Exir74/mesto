import './index.css';
import {
  avatarEditButton,
  avatarForm,
  avatarPopup,
  avatarUrl,
  cardContainer,
  cardForm,
  cardPopup,
  formValidationConfig,
  imageAddButton,
  imagePopup,
  imageTemplate,
  poppupSubtitle,
  popupConfirmSelector,
  popupName,
  popupPlaceName,
  popupPlaceUrl,
  profileAvatarImage,
  profileEditButton,
  profileForm,
  profileName,
  profileNamePopup,
  profilePopup,
  profileSubtitle,
  profileSubtitlePopup,
} from '../utils/constants.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {Section} from '../components/Section.js';
import {Api} from '../components/Api.js';
import {PopupWithConfirm} from '../components/PopupWithConfirm.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '70f54093-bc83-47bc-b65d-881ab4394db0',
  },
});

const popupConfirm = new PopupWithConfirm(popupConfirmSelector, {
  handleConfirm: (element) => {
    api
      .deleteUserCard(element.getCardId())
      .then((res) => {
        element.deleteCard();
        popupConfirm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

popupConfirm.setEventListeners();
const popupImage = new PopupWithImage(imagePopup);
const createCard = (item) => {
  const card = new Card(item, userInfoPopup.getUserId(), imageTemplate, {
    handleCardClick: () => {
      popupImage.open(item);
    },

    handleTrashClick: (item) => {
      popupConfirm.open(item);
    },

    handleOwner: (element, isOwner) => {
      if (isOwner) {
        element
          .querySelector('.card__trash')
          .classList.add('card__trash_active');
      }
    },

    handleLikeChange: () => {
      if (!card.isLiked()) {
        api
          .setLike(card.getCardId())
          .then((cardData) => {
            card.updateLikes(cardData.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .removeLike(card.getCardId())
          .then((cardData) => {
            card.updateLikes(cardData.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  });
  return card.generateCard();
};
popupImage.setEventListeners();
const cardSection = new Section(
  {
    data: [],
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  cardContainer
);
Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfoPopup.setUserInfo(user)
    cardSection.renderItem(cards, user);
  })
  .catch((err) => {
    console.log(err);
  });

const popupImageAdd = new PopupWithForm(cardPopup, {
  handleFormSubmit: (items) => {
    const {[popupPlaceName]: name, [popupPlaceUrl]: link} = items;
    api
      .addUserCard(name, link)
      .then((result) => {
        cardSection.renderItem([result], result.owner);
        popupImageAdd.close();
      })
      .catch((reject) => {
        console.log(reject);
      });
  },
});

popupImageAdd.setEventListeners();
imageAddButton.addEventListener('click', () => {
  popupImageAdd.open();
  validatorAddCard.removeValidationErrors();
  validatorAddCard.toggleButton();
});

const userInfoPopup = new UserInfo({
  profileName,
  profileSubtitle,
  profileAvatarImage,
});
const popupEditForm = new PopupWithForm(profilePopup, {
  handleFormSubmit: (items) => {
    popupEditForm.setSavingText();
    const {[popupName]: name, [poppupSubtitle]: about} = items;
    api
      .setUserInformation(name, about)
      .then((res) => {
        userInfoPopup.setUserInfo(res)
        popupEditForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditForm.setDefaultSavingText();
      });
  },
});
const handleEditProfileSubmit = () => {
  const userData = userInfoPopup.getUserInfo();
  profileNamePopup.value = userData.name;
  profileSubtitlePopup.value = userData.about;
  popupEditForm.open();
  validatorEditProfile.removeValidationErrors();
  validatorEditProfile.toggleButton();
};
profileEditButton.addEventListener('click', handleEditProfileSubmit);
popupEditForm.setEventListeners();

const popupEditAvatar = new PopupWithForm(avatarPopup, {
  handleFormSubmit: (items) => {
    popupEditAvatar.setSavingText();
    const {[avatarUrl]: link} = items;
    api
      .setUserAvatar(link)
      .then((res) => {
        userInfoPopup.setUserInfo(res)
        popupEditAvatar.close();
      })
      .catch((reject) => {
        console.log(reject);
      })
      .finally(() => {
        popupEditAvatar.setDefaultSavingText();
      });
  },
});
popupEditAvatar.setEventListeners();
const handlerAvatarEditButton = () => {
  popupEditAvatar.open();
  validatorAvatar.removeValidationErrors();
  validatorAvatar.toggleButton();
};
avatarEditButton.addEventListener('click', handlerAvatarEditButton);

const validatorEditProfile = new FormValidator(
  formValidationConfig,
  profileForm
);
const validatorAddCard = new FormValidator(
  formValidationConfig,
  cardForm
);
const validatorAvatar = new FormValidator(
  formValidationConfig,
  avatarForm
);
validatorEditProfile.enableValidation();
validatorAddCard.enableValidation();
validatorAvatar.enableValidation();
