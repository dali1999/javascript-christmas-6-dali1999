import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Menu from '../model/Menu.js';
import Calender from '../model/Calender.js';
import Order from '../model/Order.js';
import Event from '../model/Event.js';

const OutputView = {
  menu: new Menu(),
  order: new Order(),
  event: new Event(),
  totalBenefits: 0,
  nullCount: 0,

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
    this.order.formatOrder();
    this.order.formattedOrderArr.forEach((item) => {
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
      Console.print(discountMessage);
      return true;
    }
    return false;
  },

  printDdayDiscount() {
    const dDayDiscountInfo = this.event.checkDdayDiscountDay(
      InputView.visitDate,
    );
    if (
      !this.printDiscountMessage('크리스마스 디데이 할인', dDayDiscountInfo)
    ) {
      this.nullCount += 1;
    }
  },

  printWeekDayDiscount() {
    const weekdayDiscountInfo = this.event.checkWeekdayDiscountDay(
      InputView.visitDate,
      this.order.formattedOrderArr,
    );
    if (!this.printDiscountMessage('평일 할인', weekdayDiscountInfo)) {
      this.nullCount += 1;
    }
  },

  printWeekendDiscount() {
    const weekendDiscountInfo = this.event.checkWeekendDiscountDay(
      InputView.visitDate,
      this.order.formattedOrderArr,
    );
    if (!this.printDiscountMessage('주말 할인', weekendDiscountInfo)) {
      this.nullCount += 1;
    }
  },

  printSpecialDiscount() {
    const specialDiscountInfo = this.event.checkSpecialDiscountDay(
      InputView.visitDate,
    );
    if (!this.printDiscountMessage('특별 할인', specialDiscountInfo)) {
      this.nullCount += 1;
    }
  },

  printGiveawayEvent() {
    const giveAwayEventInfo = this.event.checkGiveAwayEvent(
      this.menu.giveAwayMenuInfo(),
    );
    if (!this.printDiscountMessage('증정 이벤트', giveAwayEventInfo)) {
      this.nullCount += 1;
    }
  },

  printBenefitDetail() {
    Console.print('\n<혜택 내역>');
    this.printDdayDiscount();
    this.printWeekDayDiscount();
    this.printWeekendDiscount();
    this.printSpecialDiscount();
    this.printGiveawayEvent();
    if (this.nullCount === 5) {
      Console.print('없음');
    }
  },

  printTotalBenefits() {
    Console.print('\n<총혜택 금액>');
    this.totalBenefits =
      this.event.checkDdayDiscountDay(InputView.visitDate) +
      this.event.checkWeekdayDiscountDay(
        InputView.visitDate,
        this.order.formattedOrderArr,
      ) +
      this.event.checkWeekendDiscountDay(
        InputView.visitDate,
        this.order.formattedOrderArr,
      ) +
      this.event.checkSpecialDiscountDay(InputView.visitDate) +
      this.event.checkGiveAwayEvent(this.menu.giveAwayMenuInfo());

    const totalBenefitsMessage =
      this.totalBenefits !== 0
        ? `-${this.totalBenefits.toLocaleString()}원`
        : '없음';
    Console.print(totalBenefitsMessage);
  },

  printExpectedPayment() {
    Console.print('\n<할인 후 예상 결제 금액>');
    let expectedPayment = this.menu.totalPrice - this.totalBenefits;
    const giveAwayEventInfo = this.event.checkGiveAwayEvent(
      this.menu.giveAwayMenuInfo(),
    );
    if (this.menu.giveAwayMenuInfo()) {
      expectedPayment += giveAwayEventInfo;
      return Console.print(`${expectedPayment.toLocaleString()}원`);
    }
    return Console.print(`${expectedPayment.toLocaleString()}원`);
  },

  printGrantedEventBadge() {
    Console.print('\n<12월 이벤트 배지>');
    if (this.totalBenefits >= 20000) return Console.print('산타');
    if (this.totalBenefits >= 10000) return Console.print('트리');
    if (this.totalBenefits >= 5000) return Console.print('별');
    return Console.print('없음');
  },
};

// const m = new Menu();
// Console.print(m.);
export default OutputView;
