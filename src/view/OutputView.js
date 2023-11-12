import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Menu from '../model/Menu.js';
import Order from '../model/Order.js';
import Event from '../model/Event.js';
import Payment from '../model/Payment.js';
import Badge from '../model/Badge.js';

const OutputView = {
  menu: new Menu(),
  order: new Order(),
  event: new Event(),

  printOpening() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printBenefitOpening() {
    const date = InputView.visitDate;
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
  },

  printOrderMenu() {
    Console.print('<주문 메뉴>');
    this.order.formatOrder().forEach((item) => {
      Console.print(`${item[0]} ${item[1]}개`);
    });
  },

  printTotalPriceBeforeDiscount() {
    Console.print('\n<할인 전 총주문 금액>');
    this.menu.totalPrice = this.menu.getTotalPriceForMenu(
      this.order.formattedOrderArr,
    );
    Console.print(`${this.menu.totalPrice.toLocaleString()}원`);
  },

  printGiveawayMenu() {
    Console.print('\n<증정 메뉴>');
    const giveAwayMessage = this.menu.giveAwayMenuInfo()
      ? '샴페인 1개'
      : '없음';
    Console.print(giveAwayMessage);
  },

  printDiscountMessage(message, info) {
    if (info !== null) {
      const discountMessage = `${message}: -${info.toLocaleString()}원`;
      return Console.print(discountMessage);
    }
    return null;
  },

  printDdayDiscount() {
    const dDayDiscountInfo = Event.checkDdayDiscountDay(InputView.visitDate);
    return this.printDiscountMessage(
      '크리스마스 디데이 할인',
      dDayDiscountInfo,
    );
  },

  printWeekDayDiscount() {
    const weekdayDiscountInfo = this.event.checkWeekdayDiscountDay(
      InputView.visitDate,
      this.order.formattedOrderArr,
    );
    return this.printDiscountMessage('평일 할인', weekdayDiscountInfo);
  },

  printWeekendDiscount() {
    const weekendDiscountInfo = this.event.checkWeekendDiscountDay(
      InputView.visitDate,
      this.order.formattedOrderArr,
    );
    return this.printDiscountMessage('주말 할인', weekendDiscountInfo);
  },

  printSpecialDiscount() {
    const specialDiscountInfo = this.event.checkSpecialDiscountDay(
      InputView.visitDate,
    );
    return this.printDiscountMessage('특별 할인', specialDiscountInfo);
  },

  printGiveawayEvent() {
    const giveAwayEventInfo = Event.checkGiveAwayEvent(
      this.menu.giveAwayMenuInfo(),
    );
    return this.printDiscountMessage('증정 이벤트', giveAwayEventInfo);
  },

  printBenefitDetail() {
    Console.print('\n<혜택 내역>');
    const discountMessages = [
      this.printDdayDiscount(),
      this.printWeekDayDiscount(),
      this.printWeekendDiscount(),
      this.printSpecialDiscount(),
      this.printGiveawayEvent(),
    ];
    const hasDiscounts = discountMessages.some((message) => message !== null);
    if (!hasDiscounts) {
      Console.print('없음');
    }
  },

  printTotalBenefits() {
    Console.print('\n<총혜택 금액>');
    this.event.totalBenefitsFromEvents(
      InputView.visitDate,
      this.order.formattedOrderArr,
      this.menu.giveAwayMenuInfo(),
    );
    const totalBenefitsMessage =
      this.event.totalBenefits !== 0
        ? `-${this.event.totalBenefits.toLocaleString()}원`
        : '없음';
    Console.print(totalBenefitsMessage);
  },

  printExpectedPayment() {
    Console.print('\n<할인 후 예상 결제 금액>');
    const expectedPayment = Payment.expectedPayment(
      this.menu.totalPrice,
      this.event.totalBenefits,
      this.menu.giveAwayMenuInfo(),
    );
    Console.print(`${expectedPayment.toLocaleString()}원`);
  },

  printGrantedEventBadge() {
    Console.print('\n<12월 이벤트 배지>');
    const grantedBadge = Badge.grantingEventBadge(this.event.totalBenefits);
    if (grantedBadge !== null) return Console.print(grantedBadge);
    return Console.print('없음');
  },
};

export default OutputView;
