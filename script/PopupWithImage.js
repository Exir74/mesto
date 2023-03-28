import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup {
  constructor(popupSelector, {name, link}){
    super(popupSelector)
    this._name = name;
    this._link = link
  }
  open(){
    this._renderUserImage()
    super.open()
    // console.log(this._popupSelector.querySelector('.popup__full-image'));
  }
  close(){
    super.close()
  }
  _renderUserImage(){
    this._popupSelector.querySelector('.popup__full-image').src = this._link
    this._popupSelector.querySelector('.popup__full-image').alt = this._name
    this._popupSelector.querySelector('.popup__image-text').textContent = this._name
  }

}
