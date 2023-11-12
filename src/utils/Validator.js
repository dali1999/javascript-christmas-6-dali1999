import Exception from './Exception.js';

const Validator = {
  validateVisitDate(date) {
    Exception.isNumber(date);
    Exception.isValidRange(date);
  },

  validateOrder(order) {
    Exception.isOrderInMenu(order);
    Exception.isMorethanOneMenu(order);
    Exception.isOrderQuantityNumber(order);
    Exception.isDuplicate(order);
  },
};

export default Validator;
