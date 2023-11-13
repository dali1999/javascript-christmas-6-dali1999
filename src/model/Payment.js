import Event from './Event.js';

class Payment {
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
