import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import Menu from './Menu.js';

class Order {
  constructor() {
    // this.order = 0;
    this.formattedOrderArr = [];
    this.menu = new Menu();
  }

  formatOrder() {
    const orderArr = InputView.orderMenu.split(',');
    this.formattedOrderArr = orderArr.map((item) => {
      const [menu, num] = item.split('-');

      //   if (!this.menu.findMenuByName(menu.trim())) {
      //     throw new Error('[ERROR] 메뉴에 없습니다');
      //   }

      return [menu.trim(), parseInt(num.trim(), 10)];
    });
    return this.formattedOrderArr;
  }
}

export default Order;
