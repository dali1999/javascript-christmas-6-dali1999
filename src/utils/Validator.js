import Exception from './Exception.js';

const Validator = {
  validateVisitDate(date) {
    Exception.isNumber(date);
    Exception.isValidRange(date);
  },
};

export default Validator;
