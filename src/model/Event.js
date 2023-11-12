import Calender from './Calender.js';
import Menu from './Menu.js';

class Event {
  constructor() {
    this.calender = new Calender();
    this.menu = new Menu();
  }

  // 크리스마스 디데이 할인
  static checkDdayDiscountDay(date) {
    if (date >= 1 && date <= 25) return 1000 + 100 * (date - 1);
    return null;
  }

  // 평일 할인: -${2023 * 디저트수}원
  checkWeekdayDiscountDay(date, orderMenu) {
    this.calender.storeWeekday();
    if (
      this.calender.weekDay.includes(date) &&
      this.menu.isDessertInOrder(orderMenu)
    ) {
      const dessertQuantity = this.menu.getDessertQuantityInOrder(orderMenu);
      return 2023 * dessertQuantity;
    }
    return null;
  }

  // 주말 할인: -${2023 * 메인수}원
  checkWeekendDiscountDay(date, orderMenu) {
    this.calender.storeWeekendday();
    if (
      this.calender.weekendDay.includes(date) &&
      this.menu.isMainInOrder(orderMenu)
    ) {
      const mainQuantity = this.menu.getMainQuantityInOrder(orderMenu);
      return 2023 * mainQuantity;
    }
    return null;
  }

  // 특별 할인
  checkSpecialDiscountDay(date) {
    this.calender.storeSpecialDate();
    if (this.calender.specialDate.includes(date)) return 1000;
    return null;
  }

  // 증정 이벤트
  static checkGiveAwayEvent(isGiveAway) {
    if (isGiveAway) return 25000;
    return null;
  }
}
const a = new Event();
a.checkWeekdayDiscountDay();

export default Event;
