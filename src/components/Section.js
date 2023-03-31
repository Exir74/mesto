export class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  addItem(item) {
    // console.log(item, 'ADDITEM');
    this._container.append(item);
  }
  renderItem(items) {
    // console.log(items,'RENDERITEM');
    this._renderedItems = items
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
