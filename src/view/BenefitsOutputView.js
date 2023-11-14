import { Console } from '@woowacourse/mission-utils';
import PromptMessage from '../constant/PromptMessage.js';
import Menu from '../model/Menu.js';
import Event from '../model/Event.js';
import Payment from '../model/Payment.js';
import Badge from '../model/Badge.js';

const BenefitsOutputView = {
  menu: new Menu(),
  event: new Event(),
  payment: new Payment(),

  printGiveAwayMenu(giveAwayInfo) {
    Console.print(PromptMessage.GIVEAWAY_MENU_TITLE);

    const giveAwayMessage = giveAwayInfo ? PromptMessage.GIVEAWAY_MESSAGE : PromptMessage.NULL_MESSAGE;
    Console.print(giveAwayMessage);
  },

  printDiscountMessage(message, info) {
    if (info !== null) {
      const discountMessage = `${message}: -${info.toLocaleString()}원`;
      return Console.print(discountMessage);
    }
    return null;
  },

  printDdayDiscount(totalPrice, visitDate) {
    const dDayDiscountInfo = Event.checkDdayDiscountDay(totalPrice, visitDate);
    return this.printDiscountMessage(PromptMessage.DDAY_DISCOUNT, dDayDiscountInfo);
  },

  printWeekDayDiscount(totalPrice, visitDate, order) {
    const weekdayDiscountInfo = this.event.checkWeekdayDiscountDay(totalPrice, visitDate, order);
    return this.printDiscountMessage(PromptMessage.WEEKDAY_DISCOUNT, weekdayDiscountInfo);
  },

  printWeekendDiscount(totalPrice, visitDate, order) {
    const weekendDiscountInfo = this.event.checkWeekendDiscountDay(totalPrice, visitDate, order);
    return this.printDiscountMessage(PromptMessage.WEEKEND_DISCOUNT, weekendDiscountInfo);
  },

  printSpecialDiscount(totalPrice, visitDate) {
    const specialDiscountInfo = this.event.checkSpecialDiscountDay(totalPrice, visitDate);
    return this.printDiscountMessage(PromptMessage.SPECIAL_DISCOUNT, specialDiscountInfo);
  },

  printGiveawayEvent(giveAwayInfo) {
    const giveAwayEventInfo = Event.checkGiveAwayEvent(giveAwayInfo);
    return this.printDiscountMessage(PromptMessage.GIVEAWAY_EVENT_DISCOUNT, giveAwayEventInfo);
  },

  printBenefitDetail(totalPrice, visitDate, order, giveAwayInfo) {
    Console.print(PromptMessage.BENEFIT_DETAIL_TITLE);

    const discountMessages = [
      this.printDdayDiscount(totalPrice, visitDate),
      this.printWeekDayDiscount(totalPrice, visitDate, order),
      this.printWeekendDiscount(totalPrice, visitDate, order),
      this.printSpecialDiscount(totalPrice, visitDate),
      this.printGiveawayEvent(giveAwayInfo),
    ];
    const hasDiscounts = discountMessages.some((message) => message !== null);
    if (!hasDiscounts) {
      Console.print(PromptMessage.NULL_MESSAGE);
    }
  },

  printTotalBenefits(visitDate, order, totalPrice, giveAwayInfo) {
    Console.print(PromptMessage.TOTAL_BENEFIT_TITLE);

    this.event.totalBenefitsFromEvents(totalPrice, visitDate, order, giveAwayInfo);
    const totalBenefitsMessage =
      this.event.totalBenefits !== 0 ? `-${this.event.totalBenefits.toLocaleString()}원` : PromptMessage.NULL_MESSAGE;
    Console.print(totalBenefitsMessage);
  },

  printExpectedPayment(totalPrice, giveAwayInfo) {
    Console.print(PromptMessage.EXPECTED_PAYMENT_TITLE);

    const expectedPayment = Payment.expectedPayment(
      totalPrice,
      this.event.totalBenefits,
      giveAwayInfo,
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
export default BenefitsOutputView;
