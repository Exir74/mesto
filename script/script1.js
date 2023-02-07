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

//добавление картинки в массив 
function addPlace() {
  initialCards.unshift({name: placeName.value , link: placeUrl.value});
  placeName.value='';
  placeUrl.value='';
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
  })
})
// слушатель закрытия картинки по нажатию на оверлей
popupOverlay.forEach((element, index) => {
  element.addEventListener('click', (event) => {
    if (event.target === event.currentTarget){
      togglePopup(index);
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
    if (index === 1 ) {
      addPlace();
    }
    togglePopup(index)
  })
 })

 //вставка картинки и описания из массива
 cardPopup.forEach(function addImage(element, index){
    cardImage[index].setAttribute('src', initialCards[index].link);
    cardCaption[index].textContent = initialCards[index].name; 
    cardImage[index].setAttribute('alt', initialCards[index].name);
  });