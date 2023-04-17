export class Section {
  constructor({data, renderer}, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItem(items) {
    this._renderedItems = items;
    this._renderedItems.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
}
