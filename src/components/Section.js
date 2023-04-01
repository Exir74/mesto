export class Section {
  constructor({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  addItem(item) {
    this._container.prepend(item);
  }
  renderItem(items) {
    items.reverse().forEach((item) => {
      this._renderer(item);
    });
  }
}
