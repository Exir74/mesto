export class Card {
  constructor(
    data,
    user,
    imageTemplate,
    {
      handleCardClick,
      handleTrashClick,
      handleLikeChange,
    }
  ) {
    this._image = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._imageTemplate = imageTemplate;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._data = data;
    this._user = user;
    this._handleLikeChange = handleLikeChange;
  }
  _getTemplate() {
    return this._imageTemplate
      .querySelector('.cards__item')
      .cloneNode(true);
  }
  _setListeners() {
    this._element
      .querySelector('.card__button')
      .addEventListener('click', () => {
        this._handleCardClick();
      });
    this._element
      .querySelector('.card__trash')
      .addEventListener('click', () => {
        this._handleTrashClick(this);
      });
    this._cardLikeButton = this._element.querySelector('.card__like');
    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeChange(this._data._id);
    });
  }
  getCardId(){
    return this._data._id
  }
  _checkOwner() {
    return this._user === this._data.owner._id;
  }
  _activateTrashButton(){
    if (this._checkOwner()) {
      this._element
        .querySelector('.card__trash')
        .classList.add('card__trash_active');
    }
  }
  toggleLike() {
    this._cardLikeButton.classList.toggle('card__like_active');
  }
  updateLikes(likes) {
    this.toggleLike();
    this._likeQuantity.textContent = likes.length;
  }
  isLiked() {
    return this._cardLikeButton.classList.value.includes('card__like_active')
  }
  _checkLike() {
    this._likes.forEach((item) => {
      if (item._id === this._user) {
        this.updateLikes(this._likes);
      }
    });
  }
  deleteCard() {
    this._element.remove()
    this._element = null
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setListeners();
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._image;
    this._element.querySelector('.card__caption').textContent =
      this._name;
    this._cardImage.alt = this._name;
    this._likeQuantity = this._element.querySelector(
      '.card__like-quantity'
    );
    this._element.querySelector('.card__like-quantity').textContent =
      this._likes.length;
    this._activateTrashButton()
    this._checkLike();
    return this._element;
  }
}
