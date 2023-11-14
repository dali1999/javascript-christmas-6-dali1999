/* eslint-disable */
import Payment from '../src/model/Payment.js';

describe('Payment 테스트', () => {
  test('getPriceForMenu', async () => {
    // given
    const menuNames = ['양송이수프', '바비큐립', '아이스크림', '샴페인'];
    const quantities = [1, 2, 3, 1];
    const outputs = [6000, 108000, 15000, 25000];

    // when
    const payment = new Payment();
    const priceForMenu = menuNames.map((menuName, index) => payment.getPriceForMenu(menuName, quantities[index]));

    // then
    expect(priceForMenu).toEqual(outputs);
  });

  test('getTotalPriceForMenu', async () => {
    // given
    const menuArr = [
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ];
    const output = 142000;

    // when
    const payment = new Payment();
    const totalPriceForMenu = payment.getTotalPriceForMenu(menuArr);

    // then
    expect(totalPriceForMenu).toEqual(output);
  });

  test('expectedPayment', async () => {
    // given
    const totalPrice = 142000;
    const benefits = 31246;
    const giveAwayInfo = true;
    const output = 135754;

    // when
    const payment = Payment.expectedPayment(totalPrice, benefits, giveAwayInfo);

    // then
    expect(payment).toEqual(output);
  });
});
