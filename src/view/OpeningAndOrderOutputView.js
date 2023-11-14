import { Console } from '@woowacourse/mission-utils';
import PromptMessage from '../constant/PromptMessage.js';

const OpeningAndOrderOutputView = {
  printPlannerOpening() {
    Console.print(PromptMessage.PLANNER_OPENING);
  },

  printBenefitOpening(visitDate) {
    Console.print(PromptMessage.BENEFITS_OPENING(visitDate));
  },

  printOrderMenu(order) {
    Console.print(PromptMessage.ORDER_MENU_TITLE);

    order.forEach((item) => {
      Console.print(`${item[0]} ${item[1]}개`);
    });
  },

  printTotalPriceBeforeDiscount(totalPrice) {
    Console.print(PromptMessage.TOTAL_BEFORE_DISCOUNT_TITLE);

    Console.print(`${totalPrice.toLocaleString()}원`);
  },
};

export default OpeningAndOrderOutputView;
