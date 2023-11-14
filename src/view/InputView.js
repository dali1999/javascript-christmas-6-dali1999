import { Console } from '@woowacourse/mission-utils';
import Validator from '../utils/Validator.js';
import PromptMessage from '../constant/PromptMessage.js';

const InputView = {
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
    const visitDate = await InputView.getReInput(PromptMessage.ENTER_VISIT_DATE, (input) => {
      Validator.validateVisitDate(input);
      return true;
    });
    return parseInt(visitDate, 10);
  },

  async readOrderMenu() {
    const orderMenu = await InputView.getReInput(PromptMessage.ENTER_ORDER, (input) => {
      Validator.validateOrder(input);
      return true;
    });
    return orderMenu;
  },
};

export default InputView;
