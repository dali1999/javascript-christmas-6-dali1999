/* eslint-disable */
import Payment from '../src/model/Payment.js';

describe('Payment 테스트', () => {
  test('총혜택이 20,000 이상일 때 `산타` 이벤트 배지 부여', async () => {
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
