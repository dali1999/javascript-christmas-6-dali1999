import Menu from '../model/Menu.js';
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
    const orderArr = order.split(',');
    const formattedOrderArr = orderArr.map((item) => {
      const [menu, num] = item.split('-');
      return [menu.trim(), parseInt(num.trim(), 10)];
    });
    const allItemsInMenu = formattedOrderArr.every(([menuItem]) =>
      this.menu.isItemInMenu(menuItem),
    );
    if (!allItemsInMenu) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 메뉴 개수가 1 이상이 아닐 시
  isMorethanOneMenu(order) {
    const orderArr = order.split(',');
    const orderQuantityArr = orderArr.map((item) => {
      const [, num] = item.split('-');
      return parseInt(num.trim(), 10);
    });

    const totalQuantity = orderQuantityArr.reduce(
      (total, current) => total + current,
      0,
    );
    if (totalQuantity === 0) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 메뉴 개수가 숫자가 아니게 입력했을 시
  isOrderQuantityNumber(order) {
    const orderArr = order.split(',');
    const orderQuantityArr = orderArr.map((item) => {
      const [, num] = item.split('-');
      return parseInt(num.trim(), 10);
    });
    const hasNaN = orderQuantityArr.some((item) => Number.isNaN(item));
    if (hasNaN) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },

  // 중복 메뉴 입력 시
  isDuplicate(order) {
    const orderArr = order.split(',');
    const orderMenuArr = orderArr.map((item) => {
      const [menu] = item.split('-');
      return menu.trim();
    });
    const set = new Set(orderMenuArr);
    if (orderMenuArr.length !== set.size) {
      throw new Error(ErrorMessage.INVALID_ORDER);
    }
  },
  // 메뉴 형식이 예시와 다를 시
};

export default Exception;
