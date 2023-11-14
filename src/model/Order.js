class Order {
  static formatOrder(orderInput) {
    const orderArr = orderInput.split(',');
    const formattedOrderArr = orderArr.map((item) => {
      const [menu, num] = item.split('-');
      return [menu, parseInt(num, 10)];
    });
    return formattedOrderArr;
  }

  static formarOrderMenu(orderInput) {
    const orderArr = orderInput.split(',');
    const orderMenuArr = orderArr.map((item) => {
      const [menu] = item.split('-');
      return menu;
    });
    return orderMenuArr;
  }

  static formarOrderQuantity(orderInput) {
    const orderArr = orderInput.split(',');
    const orderQuantityArr = orderArr.map((item) => {
      const [, num] = item.split('-');
      return parseInt(num, 10);
    });
    return orderQuantityArr;
  }
}

export default Order;
