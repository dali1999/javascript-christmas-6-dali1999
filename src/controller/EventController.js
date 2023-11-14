import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Order from '../model/Order.js';
import Payment from '../model/Payment.js';

class EventController {
  constructor() {
    this.payment = new Payment();
    this.visitDate = 0;
    this.orderInput = '';
    this.totalPrice = 0;
    this.formattedOrderArr = [];
  }

  async startPlannerAndGetInput() {
    OutputView.printPlannerOpening();
    this.visitDate = await InputView.readVisitDate();
    this.orderInput = await InputView.readOrderMenu();
    this.formattedOrderArr = Order.formatOrder(this.orderInput);
    this.totalPrice = this.payment.getTotalPriceForMenu(this.formattedOrderArr);
  }

  plannerDetails() {
    OutputView.printBenefitOpening(this.visitDate);
    OutputView.printOrderMenu(this.formattedOrderArr);
    OutputView.printTotalPriceBeforeDiscount(this.formattedOrderArr, this.totalPrice);
    OutputView.printGiveawayMenu(this.totalPrice);
    OutputView.printBenefitDetail(this.visitDate, this.formattedOrderArr);
    OutputView.printTotalBenefits(this.visitDate, this.formattedOrderArr, this.totalPrice);
    OutputView.printExpectedPayment(this.totalPrice);
    OutputView.printGrantedEventBadge();
  }
}

export default EventController;
