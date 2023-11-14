/* eslint-disable */
import Order from '../src/model/Order.js';

describe('Order 테스트', () => {
  test('formatOrder', async () => {
    // given
    const orderInput = '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1';

    //when
    const formattedOrder = Order.formatOrder(orderInput);

    // then
    expect(formattedOrder).toEqual([
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ]);
  });

  test('formarOrderMenu', async () => {
    // given
    const orderInput = '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1';

    //when
    const orderMenu = Order.formarOrderMenu(orderInput);

    // then
    expect(orderMenu).toEqual(['티본스테이크', '바비큐립', '초코케이크', '제로콜라']);
  });

  test('formarOrderQuantity', async () => {
    // given
    const orderInput = '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1';

    //when
    const orderQuantity = Order.formarOrderQuantity(orderInput);

    // then
    expect(orderQuantity).toEqual([1, 1, 2, 1]);
  });
});
