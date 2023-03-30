import {
  cardCaption,
  cardImage,
  cardItem,
  cardLike,
  cardTrash,
} from './constants.js';

export class Card {
  constructor(data, imageTemplate, openPopup) {
    this._image = data.link;
    this._name = data.name;
    this._imageTemplate = imageTemplate;
  }
  _getTemplate() {
    const cardElement = this._imageTemplate
      .querySelector(cardItem)
      .cloneNode(true);
    return cardElement;
  }
  _setListeners() {
    this._element
      .querySelector(cardTrash)
      .addEventListener('click', () => {
        this._removeCard();
      });
    this._element
      .querySelector(cardLike)
      .addEventListener('click', (event) => {
        this._addLike(event);
      });
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
    this._element.querySelector(cardImage).src = this._image;
    this._element.querySelector(cardCaption).textContent = this._name;
    this._element.querySelector(cardImage).alt = this._name;
    return this._element;
  }
}
