import Calender from './Calender.js';
import Menu from './Menu.js';

class Event {
  constructor() {
    this.calender = new Calender();
    this.menu = new Menu();
  }

  static isOrderPriceMeetsCondition(totalPrice) {
    if (totalPrice >= 10000) return true;
    return false;
  }

  static checkDdayDiscountDay(totalPrice, date) {
    if (Event.isOrderPriceMeetsCondition(totalPrice) && date >= 1 && date <= 25) return 1000 + 100 * (date - 1);
    return null;
  }

  checkWeekdayDiscountDay(totalPrice, date, orderMenu) {
    this.calender.storeWeekday();
    if (
      Event.isOrderPriceMeetsCondition(totalPrice) &&
      this.calender.weekDay.includes(date) &&
      this.menu.isDessertInOrder(orderMenu)
    ) {
      const dessertQuantity = this.menu.getDessertQuantityInOrder(orderMenu);
      return 2023 * dessertQuantity;
    }
    return null;
  }

  checkWeekendDiscountDay(totalPrice, date, orderMenu) {
    this.calender.storeWeekendday();
    if (
      Event.isOrderPriceMeetsCondition(totalPrice) &&
      this.calender.weekendDay.includes(date) &&
      this.menu.isMainInOrder(orderMenu)
    ) {
      const mainQuantity = this.menu.getMainQuantityInOrder(orderMenu);
      return 2023 * mainQuantity;
    }
    return null;
  }

  checkSpecialDiscountDay(totalPrice, date) {
    this.calender.storeSpecialDate();
    if (Event.isOrderPriceMeetsCondition(totalPrice) && this.calender.specialDate.includes(date)) return 1000;
    return null;
  }

  static checkGiveAwayEvent(isGiveAway) {
    if (isGiveAway) return 25000;
    return null;
  }

  totalBenefitsFromEvents(totalPrice, date, orderMenu, giveAwayInfo) {
    this.totalBenefits =
      Event.checkDdayDiscountDay(totalPrice, date) +
      this.checkWeekdayDiscountDay(totalPrice, date, orderMenu) +
      this.checkWeekendDiscountDay(totalPrice, date, orderMenu) +
      this.checkSpecialDiscountDay(totalPrice, date) +
      Event.checkGiveAwayEvent(giveAwayInfo);
    return this.totalBenefits;
  }
}

export default Event;
