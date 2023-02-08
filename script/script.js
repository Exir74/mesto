const page = document.querySelector('.page');
const popup = page.querySelectorAll('.popup');
const popupOverlay = Array.from (page.querySelectorAll('.popup__content'))
const popupAddImageButton = page.querySelector('.profile__add-image');
const cardImage = page.querySelectorAll('.card__image');
const cardCaption = page.querySelectorAll('.card__caption');
const popupClose = page.querySelectorAll('.popup__close');
const cardPopup = page.querySelectorAll('.card__button')
const profileName = page.querySelector('.profile__name');
const profileSubtitle = page.querySelector('.profile__subtitle');
const profileNamePopup = page.querySelector('.popup__input_type_name');
const profileSubtitlePopup = page.querySelector('.popup__input_type_subtitle');
const placeName = document.querySelector('.popup__input_type_place-name');
const placeUrl = document.querySelector('.popup__input_type_place-url');
const popupForm = document.querySelectorAll('.popup__form');
const imageTemplate = document.querySelector('#card-template').content;
const cardTrash = imageTemplate.querySelectorAll('.card__trash');
const cards = page.querySelector('.cards');
const popupFullImage = document.querySelector('.popup__full-image')
const popupFullText = document.querySelector('.popup__image-text')
const popupButtons = [
document.querySelector('.profile__edit-button'),
document.querySelector('.profile__add-button'),
];
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

iteraterray()

// добавление template карточек
function addCard(cardLink, cardName){
const imageElement = imageTemplate.querySelector('.card').cloneNode(true);
addCardContent(cards,imageElement,cardLink, cardName);
}

// добавление данных в template карточки
function addCardContent(cards,imageElement, cardLink, cardName) {
imageElement.querySelector('.card__image').src = cardLink;
imageElement.querySelector('.card__image').alt = cardName;
imageElement.querySelector('.card__caption').textContent = cardName;
imageElement.querySelector('.card__like').addEventListener('click', function(event) {
  event.target.classList.toggle('card__like_active');
})
imageElement.querySelector('.card__trash').addEventListener('click', function() {
  imageElement.remove(); 
})
imageElement.querySelector('.card__image').addEventListener('click', function(event) {
  popupFullImage.src = imageElement.querySelector('.card__image').src
  popupFullImage.alt = imageElement.querySelector('.card__caption').textContent;
  popupFullText.textContent = imageElement.querySelector('.card__caption').textContent;
  popup[2].classList.add('popup_background')
  togglePopup(2);
})
if (initialCards.length <= 6){
cards.append(imageElement);
} else {
  cards.prepend(imageElement);
}
}

// перебор массива мест
function iteraterray (){
initialCards.forEach ((element, index) => {
 const cardLink = initialCards[index].link
 const cardName = initialCards[index].name
 addCard(cardLink, cardName)
 
})
}
// открытие/закрытие попапов профиля и картинки
function togglePopup(index) {
  if (index === 0 && popup[index].classList.contains('popup_open') === false){
    transferInPopup()
  }
  popup[index].classList.toggle('popup_open');
}
//перенос данных из попапа профиля
function transferInForm (){
  profileName.textContent = profileNamePopup.value;
  profileSubtitle.textContent = profileSubtitlePopup.value;
}

// передачи данных в popup
function transferInPopup() {
  profileNamePopup.value = profileName.textContent;
  profileSubtitlePopup.value = profileSubtitle.textContent;
}

//слушатель на кнопки редактировать профиль и добавление картинки
popupButtons.forEach((element, index) => {
  element.addEventListener('click', () => {
      togglePopup(index);
  })
});
// слушатель закрытия картинки по нажатию на крестик
popupClose.forEach((element, index) => {
  element.addEventListener('click', () => {
      togglePopup(index);
      popup[2].classList.remove('popup_background')
  })
})
// слушатель закрытия картинки по нажатию на оверлей
popupOverlay.forEach((element, index) => {
  element.addEventListener('click', (event) => {
    if (event.target === event.currentTarget){
      togglePopup(index);
      popup[2].classList.remove('popup_background')
    }
  })
})

// слушатель сабмитов форм
 popupForm.forEach((element, index) => {
  element.addEventListener('submit', (event) => {
    event.preventDefault()
    if (index === 0){
      transferInForm();
    }
    if (index === 1) {
      initialCards.unshift({name: placeName.value , link: placeUrl.value});
      addCard(placeUrl.value, placeName.value)
      placeName.value='';
      placeUrl.value='';
    }
    togglePopup(index)
  })
 })
