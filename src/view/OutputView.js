import { Console } from '@woowacourse/mission-utils';
import PromptMessage from '../constant/PromptMessage.js';
import Menu from '../model/Menu.js';
import Order from '../model/Order.js';
import Event from '../model/Event.js';
import Payment from '../model/Payment.js';
import Badge from '../model/Badge.js';

const OutputView = {
  menu: new Menu(),
  order: new Order(),
  event: new Event(),

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

  printTotalPriceBeforeDiscount(order) {
    Console.print(PromptMessage.TOTAL_BEFORE_DISCOUNT_TITLE);

    this.menu.totalPrice = this.menu.getTotalPriceForMenu(order);
    Console.print(`${this.menu.totalPrice.toLocaleString()}원`);
  },

  printGiveawayMenu() {
    Console.print(PromptMessage.GIVEAWAY_MENU_TITLE);

    const giveAwayMessage = this.menu.giveAwayMenuInfo() ? PromptMessage.GIVEAWAY_MESSAGE : PromptMessage.NULL_MESSAGE;
    Console.print(giveAwayMessage);
  },

  printDiscountMessage(message, info) {
    if (info !== null) {
      const discountMessage = `${message}: -${info.toLocaleString()}원`;
      return Console.print(discountMessage);
    }
    return null;
  },

  printDdayDiscount(visitDate) {
    const dDayDiscountInfo = Event.checkDdayDiscountDay(visitDate);
    return this.printDiscountMessage(PromptMessage.DDAY_DISCOUNT, dDayDiscountInfo);
  },

  printWeekDayDiscount(visitDate, order) {
    const weekdayDiscountInfo = this.event.checkWeekdayDiscountDay(visitDate, order);
    return this.printDiscountMessage(PromptMessage.WEEKDAY_DISCOUNT, weekdayDiscountInfo);
  },

  printWeekendDiscount(visitDate, order) {
    const weekendDiscountInfo = this.event.checkWeekendDiscountDay(visitDate, order);
    return this.printDiscountMessage(PromptMessage.WEEKEND_DISCOUNT, weekendDiscountInfo);
  },

  printSpecialDiscount(visitDate) {
    const specialDiscountInfo = this.event.checkSpecialDiscountDay(visitDate);
    return this.printDiscountMessage(PromptMessage.SPECIAL_DISCOUNT, specialDiscountInfo);
  },

  printGiveawayEvent() {
    const giveAwayEventInfo = Event.checkGiveAwayEvent(this.menu.giveAwayMenuInfo());
    return this.printDiscountMessage(PromptMessage.GIVEAWAY_EVENT_DISCOUNT, giveAwayEventInfo);
  },

  printBenefitDetail(visitDate, order) {
    Console.print(PromptMessage.BENEFIT_DETAIL_TITLE);

    const discountMessages = [
      this.printDdayDiscount(visitDate),
      this.printWeekDayDiscount(visitDate, order),
      this.printWeekendDiscount(visitDate, order),
      this.printSpecialDiscount(visitDate),
      this.printGiveawayEvent(),
    ];
    const hasDiscounts = discountMessages.some((message) => message !== null);
    if (!hasDiscounts) {
      Console.print(PromptMessage.NULL_MESSAGE);
    }
  },

  printTotalBenefits(visitDate, order) {
    Console.print(PromptMessage.TOTAL_BENEFIT_TITLE);

    this.event.totalBenefitsFromEvents(visitDate, order, this.menu.giveAwayMenuInfo());
    const totalBenefitsMessage =
      this.event.totalBenefits !== 0 ? `-${this.event.totalBenefits.toLocaleString()}원` : PromptMessage.NULL_MESSAGE;
    Console.print(totalBenefitsMessage);
  },

  printExpectedPayment() {
    Console.print(PromptMessage.EXPECTED_PAYMENT_TITLE);

    const expectedPayment = Payment.expectedPayment(
      this.menu.totalPrice,
      this.event.totalBenefits,
      this.menu.giveAwayMenuInfo(),
    );
    Console.print(`${expectedPayment.toLocaleString()}원`);
  },

  printGrantedEventBadge() {
    Console.print(PromptMessage.GRANTED_BADGE_TITLE);

    const grantedBadge = Badge.grantingEventBadge(this.event.totalBenefits);
    if (grantedBadge !== null) return Console.print(grantedBadge);
    return Console.print(PromptMessage.NULL_MESSAGE);
  },
};

export default OutputView;
