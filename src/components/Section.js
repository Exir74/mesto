export class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    console.log(this);
  }
  addItem(item) {
    this._container.append(item);
  }
  renderItem() {
    this._renderedItems
    console.log('jj');
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
