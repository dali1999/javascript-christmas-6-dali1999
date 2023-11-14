import { Console } from '@woowacourse/mission-utils';

class Order {
  constructor() {
    // this.formattedOrderArr = [];
  }

  // [ ['a', '1'], ['b', '2'] ]
  static formatOrder(orderInput) {
    const orderArr = orderInput.split(',');
    const formattedOrderArr = orderArr.map((item) => {
      const [menu, num] = item.split('-');
      return [menu, parseInt(num, 10)];
    });
    Console.print(formattedOrderArr);
    return formattedOrderArr;
  }
}
Order.formatOrder('a-1, b-2');
export default Order;
