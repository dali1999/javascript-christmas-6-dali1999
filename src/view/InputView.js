import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import PromptMessage from '../constant/PromptMessage.js';

const InputView = {
  visitDate: 0,
  orderMenu: [],

  async getReInput(promptMessage, validationFunction) {
    let validInput = false;
    let userInput;

    while (!validInput) {
      userInput = await Console.readLineAsync(promptMessage);
      try {
        validInput = validationFunction(userInput);
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    }
    return userInput;
  },

  async readVisitDate() {
    this.visitDate = await InputView.getReInput(
      PromptMessage.ENTER_VISIT_DATE,
      (input) => {
        Validator.validateVisitDate(input);
        return true;
      },
    );
    this.visitDate = parseInt(this.visitDate, 10);
  },

  async readOrderMenu() {
    this.orderMenu = await InputView.getReInput(
      PromptMessage.ENTER_ORDER,
      (input) => {
        Validator.validateOrder(input);
        return true;
      },
    );
  },
};

export default InputView;
