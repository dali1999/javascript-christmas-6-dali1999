/* eslint-disable */
import Badge from '../src/model/Badge.js';

describe('Badge 테스트', () => {
  test('총혜택이 20,000 이상일 때 `산타` 이벤트 배지 부여', async () => {
    // given
    const benefit = 20000;

    // then
    expect(Badge.grantingEventBadge(benefit)).toEqual('산타');
  });

  test('총혜택이 10,000 이상일 때 `트리` 이벤트 배지 부여', async () => {
    // given
    const benefit = 10000;

    // then
    expect(Badge.grantingEventBadge(benefit)).toEqual('트리');
  });

  test('총혜택이 5,000 이상일 때 `별` 이벤트 배지 부여', async () => {
    // given
    const benefit = 5000;

    // then
    expect(Badge.grantingEventBadge(benefit)).toEqual('별');
  });

  test('총혜택이 5,000 미만일 때 이벤트 배지 부여 안함', async () => {
    // given
    const benefit = 4000;

    // then
    expect(Badge.grantingEventBadge(benefit)).toBeNull();
  });
});
