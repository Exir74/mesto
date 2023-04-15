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

const popupConfirm = new PopupWithConfirm(popupConfirmSelector, {
  handlePopupForm: (item, id) => {
    console.log();
    api.deletUserCard(id);
    item.remove();
    popupConfirm.close();
  },
});
const popupImage = new PopupWithImage(imagePopup);
const createCard = (item, user) => {
  const card = new Card(
    item,
    user,
    imageTemplate,
    {
      handleCardClick: () => {
        popupImage.open(item);
        popupImage.setEventListeners();
      },
    },
    {
      handleTrashClick: (item, id) => {
        popupConfirm.open(item, id);
        popupConfirm.setEventListeners();
      },
    },
    {
      handleOwner: (control, element) => {
        if (control === true) {
          element
            .querySelector('.card__trash')
            .classList.add('card__trash_active');
        }
      },
    },
    {
      handleLikes: (user, data) => {
        data.likes.forEach((item) => {
          if (item._id === user._id) {
            card.setLikes();
          }
        });
      },
    },
    {
      headleNewLike: (user, data, likeButton) => {
        if (likeButton.classList.value.includes('_active')) {
          api.removeLike(data._id).then((item) => {
            likeButton.parentNode.querySelector(
              '.card__like-quantity'
            ).textContent = item.likes.length;
          });
        } else {
          api
            .setLike(data._id, data.likes.push(user))
            .then((item) => {
              likeButton.parentNode.querySelector(
                '.card__like-quantity'
              ).textContent = item.likes.length;
            });
        }
      },
    }
  );
  const cardElement = card.generateCard();
  return cardElement;
};
const cardItem = new Section(
  {
    data: [],
    renderer: (item, user) => {
      const cardElement = createCard(item, user);
      cardItem.addItem(cardElement);
    },
  },
  cardContainer
);
api.getUserInformation().then((user) => {
  userInfoPopup.setUserInfo({
    name: [user.name],
    subtitle: [user.about],
  });
  profileAvatarImage.src = user.avatar;
  api.getInitialCards().then((result) => {
    result.forEach((element) => {
      checkOwnerImage(user, element);
    });
    cardItem.renderItem(result, user);
  });
});
function checkOwnerImage(user, element) {
  if (user._id === element.owner._id) {
    element.control = true;
  } else {
    element.control = false;
  }
}

const popupImageAdd = new PopupWithForm(cardPopup, {
  hedlerPopupForm: (items) => {
    const { [popupPlaceName]: name, [popupPlaceUrl]: link } = items;
    api.addUserCard(name, link).then((result) => {
      result.control = true;
      cardItem.renderItem([result], result.owner);
    });
    popupImageAdd.close();
  },
});

popupImageAdd.setEventListeners();
imageAddButton.addEventListener('click', () => {
  popupImageAdd.open();
  validatorAddCard.removeValidationErrors();
  validatorAddCard.toggleButton();
});

const userInfoPopup = new UserInfo({ profileName, profileSubtitle });
const popupEditForm = new PopupWithForm(profilePopup, {
  hedlerPopupForm: (items) => {
    setSevingText(profilePopup);
    const { [popupName]: name, [poppupSubtitle]: subtitle } = items;
    api.setUserInformation(name, subtitle);
    userInfoPopup.setUserInfo({
      name,
      subtitle,
    });
    popupEditForm.close();
  },
});
profileEditButton.addEventListener('click', () => {
  setDefaultSevingText(profilePopup);
  const userData = userInfoPopup.getUserInfo();
  profileNamePopup.value = userData.name;
  profileSubtitlePopup.value = userData.subtitle;
  popupEditForm.open();
  popupEditForm.setEventListeners();
  validatorEditProfile.removeValidationErrors();
  validatorEditProfile.toggleButton();
});
function setSevingText(popup) {
  popup.querySelector(popupButton).textContent = 'Сохранение...';
}
function setDefaultSevingText(popup) {
  popup.querySelector(popupButton).textContent = 'Сохранить';
}

const popupEditAvatar = new PopupWithForm(avatarPopup, {
  hedlerPopupForm: (items) => {
    setSevingText(avatarPopup);
    const { [avatarUrl]: link } = items;
    api.setUserAvatar(link);
    profileAvatarImage.src = link;
    popupEditAvatar.close();
  },
});

avatarEditButton.addEventListener('click', () => {
  setDefaultSevingText(avatarPopup);
  popupEditAvatar.open();
  popupEditAvatar.setEventListeners();
  validatorAvatar.removeValidationErrors();
  validatorAvatar.toggleButton();
});

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
