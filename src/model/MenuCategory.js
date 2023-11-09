import MenuItem from './MenuItem.js';

class MenuCategory {
  constructor(name, items) {
    this.name = name;
    this.items = items.map((item) => new MenuItem(item.name, item.price));
  }
}

export default MenuCategory;
