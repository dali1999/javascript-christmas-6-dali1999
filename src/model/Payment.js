import Event from './Event.js';

class Payment {
  static expectedPayment(price, benefits, giveAwayInfo) {
    let expectedPayment = price - benefits;
    const giveAwayEventInfo = Event.checkGiveAwayEvent(giveAwayInfo);
    if (giveAwayInfo) {
      expectedPayment += giveAwayEventInfo;
      return expectedPayment;
    }
    return expectedPayment;
  }
}

export default Payment;
