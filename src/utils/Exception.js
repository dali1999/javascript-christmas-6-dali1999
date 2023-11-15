import Menu from '../model/Menu.js';
import Order from '../model/Order.js';
import ErrorMessage from '../constant/ErrorMessage.js';

const Exception = {
  menu: new Menu(),
  
  isNumber(input) {
    if (isNaN(input)) {
      throw new Error(ErrorMessage.INVALID_DATE);
    }
  },

  isValidRange(input) {
    if (input < 1 || input > 31) {
      throw new Error(ErrorMessage.INVALID_DATE);
    }
  },

  isOrderInMenu(order) {
    const formattedOrderArr = Order.formatOrder(order);
    const allItemsInMenu = formattedOrderArr.every(([menuItem]) => this.menu.isItemInMenu(menuItem));
    if (!allItemsInMenu) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  isMorethanOneMenu(order) {
    const orderQuantityArr = Order.formarOrderQuantity(order);
    const hasZeroOrders = orderQuantityArr.includes(0);
    if (hasZeroOrders) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  isOrderQuantityNumber(order) {
    const orderQuantityArr = Order.formarOrderQuantity(order);
    const hasNaN = orderQuantityArr.some((item) => Number.isNaN(item));
    if (hasNaN) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  isDuplicate(order) {
    const orderMenuArr = Order.formarOrderMenu(order);
    const set = new Set(orderMenuArr);
    if (orderMenuArr.length !== set.size) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  isOnlyDrinkInOrder(order) {
    const orderMenuArr = Order.formarOrderMenu(order);
    const orderWithoutDrink = orderMenuArr.filter((item) => !this.menu.drinkChecker(item));
    if (orderWithoutDrink.length === 0) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  isValidOrderQuantity(order) {
    const orderMenuArr = Order.formarOrderQuantity(order);
    const totalOrderQuantity = orderMenuArr.reduce((acc, current) => acc + current, 0);
    if (totalOrderQuantity > 20) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  isValidOrderFormat(order) {
    const regex = /^([\p{L}\s]+-\d+)(,([\p{L}\s]+-\d+))*$/u;
    if (!regex.test(order)) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },
};

Exception.isNumber("a");

export default Exception;
