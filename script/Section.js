export class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    
  }
  addItem(item, isInitialCard) {
    if (isInitialCard) {
      this._container.append(item);
    } else {
      this._container.prepend(item);
    }
  }
  renderItem(isInitialCard) {
    this._renderedItems.forEach((item) => {
      this._renderer(item, isInitialCard);
    });
  }
}
