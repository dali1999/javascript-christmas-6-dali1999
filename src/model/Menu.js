import { Console } from '@woowacourse/mission-utils';
import MenuCategory from './MenuCategory.js';

class Menu {
  constructor() {
    this.appetizers = new MenuCategory('애피타이저', [
      { name: '양송이수프', price: 6000 },
      { name: '타파스', price: 5500 },
      { name: '시저샐러드', price: 8000 },
    ]);

    this.mainDishes = new MenuCategory('메인', [
      { name: '티본스테이크', price: 55000 },
      { name: '바비큐립', price: 54000 },
      { name: '해산물파스타', price: 35000 },
      { name: '크리스마스파스타', price: 25000 },
    ]);

    this.desserts = new MenuCategory('디저트', [
      { name: '초코케이크', price: 15000 },
      { name: '아이스크림', price: 5000 },
    ]);

    this.drinks = new MenuCategory('음료', [
      { name: '제로콜라', price: 3000 },
      { name: '레드와인', price: 60000 },
      { name: '샴페인', price: 25000 },
    ]);

    this.totalPrice = 0;
  }

  findMenuByName(menuName) {
    const allMenuItems = [
      ...this.appetizers.items,
      ...this.mainDishes.items,
      ...this.desserts.items,
      ...this.drinks.items,
    ];
    // Console.print(allMenuItems.some((item) => item.name === menuName));
    return allMenuItems.find((item) => item.name === menuName);
  }

  getPriceForMenu(menuName, quantity) {
    const menuItem = this.findMenuByName(menuName);
    if (menuItem) {
      return menuItem.price * quantity;
    }
    return 0;
  }

  getTotalPriceForMenu(menuArr) {
    this.totalPrice = menuArr.reduce((acc, [menuName, quantity]) => {
      const menuPrice = this.getPriceForMenu(menuName, quantity);
      return acc + menuPrice;
    }, 0);
    return this.totalPrice;
  }

  // 디저트
  dessertChecker(menuName) {
    const dessertItems = this.desserts.items.map((item) => item.name);
    return dessertItems.includes(menuName);
  }

  isDessertInOrder(menuArr) {
    const hasDessert = menuArr.some(([menuName]) =>
      this.dessertChecker(menuName),
    );
    return hasDessert;
  }

}
const a = new Menu();
// a.isMainInOrder([['초코케이크', 2], ['제로콜라', 3],['해산물파스타', 3]])
// [['초코케이크', 2], ['제로콜라', 3]]

export default Menu;
