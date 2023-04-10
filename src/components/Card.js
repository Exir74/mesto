export class Card {
  constructor(data, imageTemplate, { handleCardClick }) {
    this._image = data.link;
    this._name = data.name;
    this._likes= data.likes
    this._imageTemplate = imageTemplate;
    this._handleCardClick = handleCardClick;
  
  }
  _getTemplate() {
    const cardElement = this._imageTemplate
      .querySelector('.cards__item')
      .cloneNode(true);
    return cardElement;
  }
  _setListeners() {
    this._element
      .querySelector('.card__button')
      .addEventListener('click', () => {
        this._handleCardClick(this._element);
      });
    this._element
      .querySelector('.card__trash')
      .addEventListener('click', () => {
        this._removeCard();
      });
    this._cardLikeButton = this._element.querySelector('.card__like');
    this._cardLikeButton.addEventListener('click', () => {
      this._cardLikeButton.classList.toggle('card__like_active');
    });
  }
  _removeCard() {
    this._element.remove();
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setListeners();
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__caption').textContent =
      this._name;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__like-quantity').textContent = this._likes.length
    return this._element;
  }
}
