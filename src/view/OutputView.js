import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Menu from '../model/Menu.js';
import Calender from '../model/Calender.js';

const OutputView = {
  formattedMenuArr: [],
  newMenu: new Menu(),
  calender: new Calender(),
  giveAwayMessage: null,
  totalBenefits: 0,

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
    const orderMenuArr = InputView.orderMenu.split(',');
    this.formattedMenuArr = orderMenuArr.map((item) => {
      const [menu, num] = item.split('-');

      if (!this.newMenu.findMenuByName(menu.trim())) {
        throw new Error('[ERROR] 메뉴에 없습니다');
      }

      Console.print(`${menu.trim()} ${num.trim()}개`);
      return [menu.trim(), parseInt(num.trim(), 10)];
    });
    // Console.print(orderMenuArr); // ['a-2', 'b-3']
    // Console.print(this.formattedMenuArr); // [ ['a', 2],['b', 3] ]
  },

  printTotalPriceBeforeDiscount() {
    Console.print('\n<할인 전 총주문 금액>');
    // Console.print(this.formattedMenuArr.map((item) => item[1])); // [2, 3]
    this.newMenu.totalPrice = this.newMenu.getTotalPriceForMenu(
      this.formattedMenuArr,
    );
    Console.print(`${this.newMenu.totalPrice.toLocaleString()}원`);
  },

  printGiveawayMenu() {
    Console.print('\n<증정 메뉴>');
    this.giveAwayMessage =
      this.newMenu.totalPrice >= 120000 ? '샴페인 1개' : '없음';
    Console.print(this.giveAwayMessage);
  },

  printBenefitDetail() {
    Console.print('\n<혜택 내역>');
    let nullCount = 0;

    // 크리스마스 디데이 할인
    const dDayDiscountInfo = this.calender.checkDdayDiscountDay(
      InputView.visitDate,
    );
    if (dDayDiscountInfo !== null) {
      const dDayDiscountMessage = `크리스마스 디데이 할인: -${dDayDiscountInfo.toLocaleString()}원`;
      Console.print(dDayDiscountMessage);
    } else {
      nullCount += 1;
    }

    // 평일 할인
    const weekdayDiscountInfo = this.calender.checkWeekdayDiscountDay(
      InputView.visitDate,
    );
    if (weekdayDiscountInfo !== null) {
      const weekdayDiscountMessage = `평일 할인: -${weekdayDiscountInfo.toLocaleString()}원`;
      Console.print(weekdayDiscountMessage);
    } else {
      nullCount += 1;
    }

    // 주말 할인
    const weekendDiscountInfo = this.calender.checkWeekendDiscountDay(
      InputView.visitDate,
    );
    if (weekendDiscountInfo !== null) {
      const weekendDiscountMessage = `주말 할인: -${weekendDiscountInfo.toLocaleString()}원`;
      Console.print(weekendDiscountMessage);
    } else {
      nullCount += 1;
    }

    // 특별 할인
    const specialDiscountInfo = this.calender.checkSpecialDiscountDay(
      InputView.visitDate,
    );
    if (specialDiscountInfo !== null) {
      const specialDiscountMessage = `특별 할인: -${specialDiscountInfo.toLocaleString()}원`;
      Console.print(specialDiscountMessage);
    } else {
      nullCount += 1;
    }

    // 증정 이벤트
    const giveawayEventInfo = this.calender.checkGiveawayEvent();
    if (giveawayEventInfo !== null) {
      const giveawayEventMessage = `증정 이벤트: -${giveawayEventInfo.toLocaleString()}원`;
      Console.print(giveawayEventMessage);
    } else {
      nullCount += 1;
    }

    // 혜택 없을 시
    if (nullCount === 5) {
      Console.print('없음');
    }
  },

  printTotalBenefits() {
    Console.print('\n<총혜택 금액>');
    this.totalBenefits =
      this.calender.checkDdayDiscountDay(InputView.visitDate) +
      this.calender.checkWeekdayDiscountDay(InputView.visitDate) +
      this.calender.checkWeekendDiscountDay(InputView.visitDate) +
      this.calender.checkSpecialDiscountDay(InputView.visitDate) +
      this.calender.checkGiveawayEvent();

    const totalBenefitsMessage =
      this.totalBenefits !== 0
        ? `-${this.totalBenefits.toLocaleString()}원`
        : '없음';
    Console.print(totalBenefitsMessage);
  },

  printExpectedPayment() {
    Console.print('\n<할인 후 예상 결제 금액>');
    let expectedPayment = this.newMenu.totalPrice - this.totalBenefits;
    const giveawayEventInfo = this.calender.checkGiveawayEvent();
    if (giveawayEventInfo !== null) {
      expectedPayment += giveawayEventInfo;
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
