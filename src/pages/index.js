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
  cardImage,
  profileNamePopup,
  popupName,
  poppupSubtitle,
} from '../components/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';

// const popupWithForm = new PopupWithForm(cardPopup, {
//   hedlerPopupForm: (data) => {
//     popupWithForm.close();
//     const renderUserCard = new Section(
//       {
//         data,
//         renderer: (item, isInitialCard) => {
//           const { [popupPlaceName]: name, [popupPlaceUrl]: link } =
//             item;
//           const card = new Card({ name, link }, imageTemplate, {handleCardClick: ()=>{
//             console.log('dddd');
//           }});
//           const cardElement = card.generateCard();
//           renderUserCard.addItem(cardElement, isInitialCard);
//           const popupImage = new PopupWithImage(imagePopup, {
//             name,
//             link,
//           });
//           cardElement
//             .querySelector(cardImage)
//             .addEventListener('click', () => {
//               popupImage.open();
//             });
//         },
//       },
//       cardContainer
//     );
//     renderUserCard.renderItem(false);
//   },
// });

// imageAddButton.addEventListener('click', () => {
//   console.log(cardPopup);
//   popupWithForm.open()
//   //    {
//   //   hedlerPopupForm: (data) => {
//   //     popupWithForm.close();
//   //     const renderUserCard = new Section(
//   //       {
//   //         data,
//   //         renderer: (item, isInitialCard) => {
//   //           const { [popupPlaceName]: name, [popupPlaceUrl]: link } =
//   //             item;
//   //           const card = new Card({ name, link }, imageTemplate);
//   //           const cardElement = card.generateCard();
//   //           renderUserCard.addItem(cardElement, isInitialCard);
//   //           const popupImage = new PopupWithImage(imagePopup, {
//   //             name,
//   //             link,
//   //           });
//   //           cardElement
//   //             .querySelector(cardImage)
//   //             .addEventListener('click', () => {
//   //               popupImage.open();
//   //             });
//   //         },
//   //       },
//   //       cardContainer
//   //     );
//   //     renderUserCard.renderItem(false);
//   //   },
//   // });
//   popupWithForm.open();
//   validatorAddCard.toggleButton();
//   validatorAddCard.removeValidationErrors(cardPopup);
// });

// profileEditButton.addEventListener('click', () => {
//   const addUserInfo = new UserInfo({
//     name: profileName,
//     userInfo: profileSubtitle,
//   });
//   addUserInfo.setUserInfo();
//   const popupEditForm = new PopupWithForm(profilePopup, {
//     hedlerPopupForm: (data) => {
//       addUserInfo.getUserInfo();
//       popupEditForm.close();
//     },
//   });
//   popupEditForm.open();
//   validatorEditProfile.toggleButton();
//   validatorEditProfile.removeValidationErrors(profilePopup);
// });

// const initialCardElement = new Section(
//   {
//     data: initialCards,
//     renderer: (item, isInitialCard) => {
//       const card = new Card(item, imageTemplate);
//       const cardElement = card.generateCard();
//       initialCardElement.addItem(cardElement, isInitialCard);
//       const popupImage = new PopupWithImage(imagePopup, item);
//       cardElement
//         .querySelector(cardImage)
//         .addEventListener('click', () => {
//           popupImage.open();
//         });
//     },
//   },
//   cardContainer
// );
// initialCardElement.renderItem(true);
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
cardItem.renderItem(initialCards);

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
  popupEditForm.open();
  popupEditForm.setEventListeners();
});

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
