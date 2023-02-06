const page = document.querySelector('.page');
const popup = page.querySelectorAll('.popup');
const popupAddImageButton = page.querySelector('.profile__add-image');
const cardImage = page.querySelectorAll('.card__image');
const cardCaption = page.querySelectorAll('.card__caption');
const popupClose = page.querySelectorAll('.popup__close');
const cardPopup = page.querySelectorAll('.card__button')
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

function togglePopup(index) {
  popup[index].classList.toggle('popup_open');
}

// открытие/закрытие попапов профиля и картинки
popupButtons.forEach((element, index) => {
  // element.addEventListener('click', togglePopup(index));
  console.log(element)
});

popupClose.forEach((element, index) => {
  element.addEventListener('click', function closePopup(){
    togglePopup(index)
  })
})

 //вставка картинки и описания из массива
 cardPopup.forEach(function addImage(element, index){
    cardImage[index].setAttribute('src', initialCards[index].link);
    cardCaption[index].textContent = initialCards[index].name; 
    cardImage[index].setAttribute('alt', initialCards[index].name);
  });




