class Section {
  constructor({items, renderer}, containerSelector){
    this._rendererItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector)
  }
rendererItem(){
  this._rendererItems.forEach((item) => {
    this._renderer(item);
  });
}

  setItem(element) {
    this._container.append(element);
  }
}