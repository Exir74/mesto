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
const imageTemplate =
  document.querySelector('#card-template').content;
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
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__caption').textContent =
      this._name;
    console.log(this._element);
    return this._element;
  }
  
}

export function renderCard() {
  initialCards.forEach((item) => {
    console.log(item);
    const card = new Card(item, imageTemplate);
    const cardElement = card.generateCard();
    document.querySelector('.cards').append(cardElement);
  });
}
export function renderUserCard(cardLink, cardName, imageTemplate){
  const userCard = {name: cardName, link: cardLink}
  const card = new Card(userCard, imageTemplate)
  const cardElement = card.generateCard();
  document.querySelector('.cards').prepend(cardElement);
}