import { Card } from './Card.js';
import { imageTemplate } from './constants.js';

export class Section {
  constructor({ data }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
  }
  addItem(item, isInitialCard) {
    console.log(isInitialCard);
    if (isInitialCard){
    this._container.append(item);
    } else {
      this._container.prepend(item);
 
    }
  }

  renderItem(isInitialCard) {
    this._renderedItems.forEach((item) => {
      const card = new Card(item, imageTemplate);
      console.log(this._container);
      const cardElement = card.generateCard();
      this.addItem(cardElement, isInitialCard);
    });
  }
}
