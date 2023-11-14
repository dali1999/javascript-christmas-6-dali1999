/* eslint-disable */
import Event from '../src/model/Event.js';

describe('Event 테스트', () => {
  test('checkDdayDiscountDay', async () => {
    // given
    const dates = [0, 13, 20, 25, 30];
    const totalPrices = 10000;
    const outputs = [null, 2200, 2900, 3400, null];

    // then
    dates.forEach((value, index) => {
      expect(Event.checkDdayDiscountDay(totalPrices, value)).toEqual(outputs[index]);
    });
  });

  test('checkWeekdayDiscountDay', async () => {
    // given
    const dates = [2, 3];
    const totalPrices = 10000;
    const orderMenus = [
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ];
    const outputs = [null, 4046];

    // when
    const event = new Event();

    // then
    dates.forEach((value, index) => {
      expect(event.checkWeekdayDiscountDay(totalPrices, value, orderMenus)).toEqual(outputs[index]);
    });
  });

  test('checkWeekendDiscountDay', async () => {
    // given
    const dates = [2, 3];
    const totalPrices = 10000;
    const orderMenus = [
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ];
    const outputs = [4046, null];

    // when
    const event = new Event();

    // then
    dates.forEach((value, index) => {
      expect(event.checkWeekendDiscountDay(totalPrices, value, orderMenus)).toEqual(outputs[index]);
    });
  });

  test('checkSpecialDiscountDay', async () => {
    // given
    const dates = [16, 17];
    const totalPrices = 10000;
    const outputs = [null, 1000];

    // when
    const event = new Event();

    // then
    dates.forEach((value, index) => {
      expect(event.checkSpecialDiscountDay(totalPrices, value)).toEqual(outputs[index]);
    });
  });

  test('checkGiveAwayEvent', async () => {
    // given
    const isGiveAway = [true, false];
    const outputs = [25000, null];

    // then
    isGiveAway.forEach((value, index) => {
      expect(Event.checkGiveAwayEvent(value)).toEqual(outputs[index]);
    });
  });

  test('totalBenefitsFromEvents', async () => {
    // given
    const date = 3;
    const totalPrices = 10000;
    const orderMenu = [
      ['티본스테이크', 1],
      ['바비큐립', 1],
      ['초코케이크', 2],
      ['제로콜라', 1],
    ];
    const giveAwayInfo = true;
    const output = 31246;

    // when
    const event = new Event();
    event.totalBenefitsFromEvents(totalPrices, date, orderMenu, giveAwayInfo);

    // then
    expect(event.totalBenefits).toEqual(output);
  });
});
