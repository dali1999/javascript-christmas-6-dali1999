/* eslint-disable */
import Exception from '../src/utils/Exception.js';

describe('Exception 테스트', () => {
  let inputs;
  let orders;
  test('isNumber', async () => {
    // given
    inputs = ['a', '.'];

    // then
    inputs.forEach((value) => {
      expect(() => Exception.isNumber(value)).toThrow('[ERROR]');
    });
  });

  test('isValidRange', async () => {
    // given
    inputs = [0, 32];

    // then
    inputs.forEach((value) => {
      expect(() => Exception.isValidRange(value)).toThrow('[ERROR]');
    });
  });

  test('isOrderInMenu', async () => {
    // given
    orders = ['타파스-1,펩시콜라-1', '초코아이스크림-2'];

    // then
    orders.forEach((value) => {
      expect(() => Exception.isOrderInMenu(value)).toThrow('[ERROR]');
    });
  });

  test('isMorethanOneMenu', async () => {
    // given
    orders = ['제로콜라-0', '제로콜라-0,초코케이크-0'];

    // then
    orders.forEach((value) => {
      expect(() => Exception.isMorethanOneMenu(value)).toThrow('[ERROR]');
    });
  });

  test('isOrderQuantityNumber', async () => {
    // given
    orders = ['제로콜라-a', '초코케이크-.'];

    // then
    orders.forEach((value) => {
      expect(() => Exception.isOrderQuantityNumber(value)).toThrow('[ERROR]');
    });
  });

  test('isDuplicate', async () => {
    // given
    orders = ['제로콜라-2,제로콜라-1', '제로콜라-3,초코케이크-0,초코케이크-1'];

    // then
    orders.forEach((value) => {
      expect(() => Exception.isDuplicate(value)).toThrow('[ERROR]');
    });
  });

  test('isOnlyDrinkInOrder', async () => {
    // given
    orders = ['제로콜라-1', '제로콜라-2,샴페인-2'];

    // then
    orders.forEach((value) => {
      expect(() => Exception.isOnlyDrinkInOrder(value)).toThrow('[ERROR]');
    });
  });

  test('isValidOrderQuantity', async () => {
    // given
    orders = ['제로콜라-21', '티본스테이크-7,바비큐립-5,초코케이크-6,제로콜라-4'];

    // then
    orders.forEach((value) => {
      expect(() => Exception.isValidOrderQuantity(value)).toThrow('[ERROR]');
    });
  });

  test('isValidOrderFormat', async () => {
    // given
    orders = ['제로콜라/2,초코케이크-2', '제로콜라-a,초코케이크-2', '1-제로콜라,초코케이크-2'];

    // then
    orders.forEach((value) => {
      expect(() => Exception.isValidOrderFormat(value)).toThrow('[ERROR]');
    });
  });
});
