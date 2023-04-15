import './index.css';
import {
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
  avatarEditButton,
  avatarPopup,
  avatarUrl,
  profileAvatarImage,
  avatarForm,
  popupButton,
} from '../utils/constants.js';
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

const popupConfirm = new PopupWithConfirm(popupConfirmSelector, {
  handleConfirm: (element) => {
    api
      .deleteUserCard(element.getId())
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
const createCard = (item, user) => {
  const card = new Card(item, user, imageTemplate, {
    handleCardClick: () => {
      popupImage.open(item);
    },

    handleTrashClick: (item, id, element) => {
      popupConfirm.open(item, id, element);
    },

    handleOwner: (element, isOwner) => {
      if (isOwner) {
        element
          .querySelector('.card__trash')
          .classList.add('card__trash_active');
      }
    },

    handleLikeChange: (cardId) => {
      if (!card.isLiked()) {
        api
          .setLike(cardId)
          .then((cardData) => {
            console.log(cardData);
            card.updateLikes(cardData.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api
          .removeLike(cardId)
          .then((cardData) => {
            console.log(cardData);
            card.updateLikes(cardData.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  });
  popupImage.setEventListeners();

  const cardElement = card.generateCard();
  return cardElement;
};
const cardSection = new Section(
  {
    data: [],
    renderer: (item, user) => {
      const cardElement = createCard(item, user);
      cardSection.addItem(cardElement);
    },
  },
  cardContainer
);
Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfoPopup.setUserInfo({
      name: [user.name],
      subtitle: [user.about],
    });
    userInfoPopup.setAvatar({ avatar: [user.avatar] });
    cardSection.renderItem(cards, user);
  })
  .catch((err) => {
    console.log(err);
  });

const popupImageAdd = new PopupWithForm(cardPopup, {
  handleFormSubmit: (items) => {
    const { [popupPlaceName]: name, [popupPlaceUrl]: link } = items;
    api
      .addUserCard(name, link)
      .then((result) => {
        result.control = true;
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
    popupEditForm.setSavingText(profilePopup);
    const { [popupName]: name, [poppupSubtitle]: subtitle } = items;
    api
      .setUserInformation(name, subtitle)
      .then((res) => {
        userInfoPopup.setUserInfo({
          name,
          subtitle,
        });
        popupEditForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        popupEditForm.setDefaultSavingText()
      })
  },
});
const handlerProfileEditButton = () => {
  setDefaultSevingText(profilePopup);
  const userData = userInfoPopup.getUserInfo();
  profileNamePopup.value = userData.name;
  profileSubtitlePopup.value = userData.subtitle;
  popupEditForm.open();
  validatorEditProfile.removeValidationErrors();
  validatorEditProfile.toggleButton();
};
profileEditButton.addEventListener('click', handlerProfileEditButton);
popupEditForm.setEventListeners();
function setSavingText(popup) {
  popup.querySelector(popupButton).textContent = 'Сохранение...';
}
function setDefaultSevingText(popup) {
  popup.querySelector(popupButton).textContent = 'Сохранить';
}

const popupEditAvatar = new PopupWithForm(avatarPopup, {
  handleFormSubmit: (items) => {
    setSavingText(avatarPopup);
    const { [avatarUrl]: link } = items;
    api.setUserAvatar(link).catch((reject) => {
      console.log(reject);
    });
    profileAvatarImage.src = link;
    popupEditAvatar.close();
  },
});
popupEditAvatar.setEventListeners();
const handlerAvatarEditButton = () => {
  setDefaultSevingText(avatarPopup);
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
