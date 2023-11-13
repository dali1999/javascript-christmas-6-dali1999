import InputView from '../view/InputView.js';
import Menu from './Menu.js';

class Order {
  constructor() {
    this.menu = new Menu();
    this.formattedOrderArr = [];
  }

  formatOrder() {
    const orderArr = InputView.orderMenu.split(',');
    this.formattedOrderArr = orderArr.map((item) => {
      const [menu, num] = item.split('-');
      return [menu, parseInt(num, 10)];
    });
    return this.formattedOrderArr;
  }
}

export default Order;
