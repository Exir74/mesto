const page = document.querySelector('.page');
export const imageTemplate =
  document.querySelector('#card-template').content;
const imagePopup = page.querySelector('.image-popup');
const popupFullImage = page.querySelector('.popup__full-image');
const popupFullText = page.querySelector('.popup__image-text');
export class Card {
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
        this._openPopup(imagePopup);
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
  }
  _openPopup(popup){
    popup.classList.add('popup_open');
     this._element.addEventListener('keydown', (event) => {
      this._handlerPopupEscape(event);
    });
  }
  _closePopup(popup){
    popup.classList.remove('popup_open');
     this._element.removeEventListener('keydown', (event) => {
      this._handlerPopupEscape(event);
    });
  }
  _handlerPopupEscape(event) {
    if (event.key === 'Escape') {
      const popupElement = page.querySelector('.popup_open');
      this._closePopup(popupElement);
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
    this._element.querySelector('.card__image').alt = this._name;
    return this._element;
  }
}
