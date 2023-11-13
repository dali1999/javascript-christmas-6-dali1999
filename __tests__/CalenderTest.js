/* eslint-disable */
import Calender from '../src/model/Calender.js';

describe('Calender 테스트', () => {
  test('일요일과 크리스마스인 날을 저장', async () => {
    // when
    const calender = new Calender();
    calender.storeSpecialDate();

    // then
    expect(calender.specialDate).toEqual([3, 10, 17, 24, 25, 31]);
  });

  test('평일인 날을 저장', async () => {
    // when
    const calender = new Calender();
    calender.storeWeekday();

    // then
    expect(calender.weekDay).toEqual([3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 31]);
  });

  test('주말인 날을 저장', async () => {
    // when
    const calender = new Calender();
    calender.storeWeekendday();

    // then
    expect(calender.weekendDay).toEqual([1, 2, 8, 9, 15, 16, 22, 23, 29, 30]);
  });
});
