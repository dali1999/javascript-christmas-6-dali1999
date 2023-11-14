import Event from './Event.js';
import Menu from './Menu.js';

class Payment {
  constructor() {
    this.menu = new Menu();
  }


  getPriceForMenu(menuName, quantity) {
    const menuItem = this.menu.findMenuByName(menuName);
    if (menuItem) {
      return menuItem.price * quantity;
    }
    return 0;
  }

  getTotalPriceForMenu(menuArr) {
    const totalPrice = menuArr.reduce((acc, [menuName, quantity]) => {
      const menuPrice = this.getPriceForMenu(menuName, quantity);
      return acc + menuPrice;
    }, 0);
    return totalPrice;
  }

  static expectedPayment(totalPrice, benefits, giveAwayInfo) {
    let expectedPayment = totalPrice - benefits;
    const giveAwayEventInfo = Event.checkGiveAwayEvent(giveAwayInfo);
    if (giveAwayInfo) {
      expectedPayment += giveAwayEventInfo;
      return expectedPayment;
    }
    return expectedPayment;
  }
}

export default Payment;
