export class Card {
  constructor(
    data,
    user,
    imageTemplate,
    { handleCardClick },
    { handleTrashClick },
    { handleOwner },
    { handleLikes }
  ) {
    this._image = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._imageTemplate = imageTemplate;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._data = data;
    this._user = user;
    this._handleOwner = handleOwner;
    this._handleLikes = handleLikes;
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
        this._handleTrashClick(this._element, this._data._id);
      });
    this._cardLikeButton = this._element.querySelector('.card__like');
    this._cardLikeButton.addEventListener('click', () => {
      // this._cardLikeButton.classList.toggle('card__like_active');
      this.setLikes()
      //  this._handleLikes(this._user, this._data, this._cardLikeButton.classList)
    });
  }
  setLikes(){
    this._cardLikeButton.classList.toggle('card__like_active');
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setListeners();
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__caption').textContent =
      this._name;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__like-quantity').textContent =
      this._likes.length;
    this._handleOwner(
      this._data.control,
      this._element,
      this._data,
      this._user
    );
    this._handleLikes(
      this._user,
      this._data,
    );

    return this._element;
  }
}
