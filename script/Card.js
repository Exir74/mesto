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
const page = document.querySelector('.page');
const imageTemplate =
  document.querySelector('#card-template').content;
const imagePopup = page.querySelector('.image-popup');
const popupFullImage = page.querySelector('.popup__full-image');
const popupFullText = page.querySelector('.popup__image-text');
const placeName = document.querySelector(
  '.popup__input_type_place-name'
);
const placeUrl = document.querySelector(
  '.popup__input_type_place-url'
);
class Card {
  constructor(data, imageTemplate) {
    this._image = data.link;
    this._name = data.name;
    this._imageTemplate = imageTemplate;
  }
  _getTemplate() {
    const cardElement = imageTemplate
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }
  _setListeners() {
    this._element
      .querySelector('.card__button')
      .addEventListener('click', () => {
        this._togglePopup(imagePopup);
        this._addNewContetntPopup();
      });
    this._element
      .querySelector('.card__trash')
      .addEventListener('click', () => {
        this._removeCard();
      });
    this._element
      .querySelector('.card__like')
      .addEventListener('click', (event) => {
        this._addLike(event);
      });
    this._element.addEventListener('keydown', (event) => {
      this._handlerPopupEscape(event);
    });
  }

  _togglePopup(popup) {
    popup.classList.toggle('popup_open');
  }
  _handlerPopupEscape(event) {
    if (event.key === 'Escape') {
      const popupElement = page.querySelector('.popup_open');
      this._togglePopup(popupElement);
    }
  }
  _addNewContetntPopup() {
    popupFullImage.src =
      this._element.querySelector('.card__image').src;
    popupFullImage.alt = this._element.textContent;
    popupFullText.textContent = this._element.textContent;
  }
  _removeCard() {
    this._element.remove();
  }
  _addLike(event) {
    event.target.classList.toggle('card__like_active');
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setListeners();
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__caption').textContent =
      this._name;
    return this._element;
  }
}
export function renderCard(cardLink, cardName, isUserData) {
  if (isUserData) {
    const userCard = { name: cardName, link: cardLink };
    const card = new Card(userCard, imageTemplate);
    const cardElement = card.generateCard();
    document.querySelector('.cards').prepend(cardElement);
  } else {
    initialCards.forEach((item) => {
      const card = new Card(item, imageTemplate);
      const cardElement = card.generateCard();
      document.querySelector('.cards').append(cardElement);
    });
  }
}
