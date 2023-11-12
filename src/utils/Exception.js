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
};

export default Exception;
