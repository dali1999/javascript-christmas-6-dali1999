import InputView from '../view/InputView.js';
import OpeningAndOrderOutputView from '../view/OpeningAndOrderOutputView.js';
import BenefitsOutputView from '../view/BenefitsOutputView.js';
import Order from '../model/Order.js';
import Payment from '../model/Payment.js';
import Event from '../model/Event.js';
import Menu from '../model/Menu.js';

class EventController {
  constructor() {
    this.payment = new Payment();
    this.visitDate = 0;
    this.orderInput = '';
    this.formattedOrderArr = [];
    this.totalPrice = 0;
    this.giveAwayInfo = false;
  }

  async startPlannerAndGetInput() {
    OpeningAndOrderOutputView.printPlannerOpening();
    this.visitDate = await InputView.readVisitDate();
    this.orderInput = await InputView.readOrderMenu();
  }

  setDatas() {
    this.formattedOrderArr = Order.formatOrder(this.orderInput);
    this.totalPrice = this.payment.getTotalPriceForMenu(this.formattedOrderArr);
    Event.isOrderPriceMeetsCondition(this.totalPrice);
    this.giveAwayInfo = Menu.giveAwayMenuInfo(this.totalPrice);
  }

  orderDetails() {
    OpeningAndOrderOutputView.printBenefitOpening(this.visitDate);
    OpeningAndOrderOutputView.printOrderMenu(this.formattedOrderArr);
    OpeningAndOrderOutputView.printTotalPriceBeforeDiscount(this.totalPrice);
  }

  benefitsDetails() {
    BenefitsOutputView.printGiveAwayMenu(this.giveAwayInfo);
    BenefitsOutputView.printBenefitDetail(this.totalPrice, this.visitDate, this.formattedOrderArr, this.giveAwayInfo);
    BenefitsOutputView.printTotalBenefits(this.visitDate, this.formattedOrderArr, this.totalPrice, this.giveAwayInfo);
    BenefitsOutputView.printExpectedPayment(this.totalPrice, this.giveAwayInfo);
    BenefitsOutputView.printGrantedEventBadge();
  }
}

export default EventController;
