import Menu from '../model/Menu.js';
import Order from '../model/Order.js';
import ErrorMessage from '../constant/ErrorMessage.js';

const Exception = {
  menu: new Menu(),
  // 숫자여야 함
  isNumber(input) {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(input)) {
      throw new Error(ErrorMessage.INVALID_DATE);
    }
  },

  // 1~31 범위 벗어날 시
  isValidRange(input) {
    if (input < 1 || input > 31) {
      throw new Error(ErrorMessage.INVALID_DATE);
    }
  },

  // 메뉴판에 없는 메뉴 입력 시
  isOrderInMenu(order) {
    const formattedOrderArr = Order.formatOrder(order);
    const allItemsInMenu = formattedOrderArr.every(([menuItem]) => this.menu.isItemInMenu(menuItem));
    if (!allItemsInMenu) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 각 메뉴 개수가 1 이상이 아닐 시
  isMorethanOneMenu(order) {
    const orderQuantityArr = Order.formarOrderQuantity(order);
    const hasZeroOrders = orderQuantityArr.includes(0);
    if (hasZeroOrders) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 메뉴 개수가 숫자가 아니게 입력했을 시
  isOrderQuantityNumber(order) {
    const orderQuantityArr = Order.formarOrderQuantity(order);
    const hasNaN = orderQuantityArr.some((item) => Number.isNaN(item));
    if (hasNaN) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 중복 메뉴 입력 시
  isDuplicate(order) {
    const orderMenuArr = Order.formarOrderMenu(order);
    const set = new Set(orderMenuArr);
    if (orderMenuArr.length !== set.size) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 음료만 주문 시
  isOnlyDrinkInOrder(order) {
    const orderMenuArr = Order.formarOrderMenu(order);
    const orderWithoutDrink = orderMenuArr.filter((item) => !this.menu.drinkChecker(item));
    if (orderWithoutDrink.length === 0) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 메뉴는 최대 20개까지 주문 가능
  isValidOrderQuantity(order) {
    const orderMenuArr = Order.formarOrderQuantity(order);
    const totalOrderQuantity = orderMenuArr.reduce((acc, current) => acc + current, 0);
    if (totalOrderQuantity > 20) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 메뉴 형식이 예시와 다를 시
  isValidOrderFormat(order) {
    const regex = /^([\p{L}\s]+-\d+)(,([\p{L}\s]+-\d+))*$/u;
    if (!regex.test(order)) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },
};

export default Exception;
