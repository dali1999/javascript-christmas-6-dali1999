import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class EventController {
  static async startPlannerAndGetInput() {
    OutputView.printPlannerOpening();
    await InputView.readVisitDate();
    await InputView.readOrderMenu();
  }

  static plannerDetails() {
    OutputView.printBenefitOpening();
    OutputView.printOrderMenu();
    OutputView.printTotalPriceBeforeDiscount();
    OutputView.printGiveawayMenu();
    OutputView.printBenefitDetail();
    OutputView.printTotalBenefits();
    OutputView.printExpectedPayment();
    OutputView.printGrantedEventBadge();
  }
}

export default EventController;
