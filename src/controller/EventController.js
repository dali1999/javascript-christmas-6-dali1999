import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Order from '../model/Order.js';

class EventController {
  constructor() {
    this.visitDate = 0;
    this.orderInput = '';
    this.formattedOrderArr = [];
  }

  static async startPlannerAndGetInput() {
    OutputView.printPlannerOpening();
    this.visitDate = await InputView.readVisitDate();
    this.orderInput = await InputView.readOrderMenu();
    this.formattedOrderArr = Order.formatOrder(this.orderInput);
  }

  static plannerDetails() {
    OutputView.printBenefitOpening(this.visitDate);
    OutputView.printOrderMenu(this.formattedOrderArr);
    OutputView.printTotalPriceBeforeDiscount(this.formattedOrderArr);
    OutputView.printGiveawayMenu();
    OutputView.printBenefitDetail(this.visitDate, this.formattedOrderArr);
    OutputView.printTotalBenefits(this.visitDate, this.formattedOrderArr);
    OutputView.printExpectedPayment();
    OutputView.printGrantedEventBadge();
  }
}

export default EventController;
