/* eslint-disable */
import Menu from '../src/model/Menu.js';

describe('Event 테스트', () => {
  test('findMenuByName', async () => {
    // given
    const menuNames = ['양송이수프', '바비큐립', '아이스크림', '샴페인'];
    const outputs = [
      { name: '양송이수프', price: 6000 },
      { name: '바비큐립', price: 54000 },
      { name: '아이스크림', price: 5000 },
      { name: '샴페인', price: 25000 },
    ];

    // when
    const menu = new Menu();

    // then
    menuNames.forEach((value, index) => {
      expect(menu.findMenuByName(value)).toEqual(outputs[index]);
    });
  });

  test('getPriceForMenu', async () => {
    // given
    const menuNames = ['양송이수프', '바비큐립', '아이스크림', '샴페인'];
    const quantities = [1, 2, 3, 1];
    const outputs = [6000, 108000, 15000, 25000];

    // when
    const menu = new Menu();
    const priceForMenu = menuNames.map((menuName, index) => menu.getPriceForMenu(menuName, quantities[index]));

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
    const menu = new Menu();
    const totalPriceForMenu = menu.getTotalPriceForMenu(menuArr);

    // then
    expect(totalPriceForMenu).toEqual(output);
  });

  test('giveAwayMenuInfo', async () => {
    const menu = new Menu();
    let output;
    let totalPriceForMenu;
    // given
    menu.totalPrice = 120000;
    output = true;

    // when
    totalPriceForMenu = menu.giveAwayMenuInfo();

    // then
    expect(totalPriceForMenu).toEqual(output);

    // given
    menu.totalPrice = 90000;
    output = false;

    // when
    totalPriceForMenu = menu.giveAwayMenuInfo();

    // then
    expect(totalPriceForMenu).toEqual(output);
  });

  test('drinkChecker', async () => {
    // given
    const menuNames = ['양송이수프', '바비큐립', '아이스크림', '샴페인'];
    const outputs = [false, false, false, true];

    // when
    const menu = new Menu();

    // then
    menuNames.forEach((value, index) => {
      expect(menu.drinkChecker(value)).toEqual(outputs[index]);
    });
  });

  test('dessertChecker', async () => {
    // given
    const menuNames = ['양송이수프', '바비큐립', '아이스크림', '샴페인'];
    const outputs = [false, false, true, false];

    // when
    const menu = new Menu();

    // then
    menuNames.forEach((value, index) => {
      expect(menu.dessertChecker(value)).toEqual(outputs[index]);
    });
  });

  test('isDessertInOrder', async () => {
    // given
    const menuArr = [
      [
        ['티본스테이크', 1],
        ['초코케이크', 2],
      ],
      [
        ['바비큐립', 1],
        ['제로콜라', 1],
      ],
    ];
    const outputs = [true, false];

    // when
    const menu = new Menu();

    // then
    menuArr.forEach((arr, index) => {
      expect(menu.isDessertInOrder(arr)).toEqual(outputs[index]);
    });
  });

  test('getDessertQuantityInOrder', async () => {
    // given
    const menuArr = [
      [
        ['티본스테이크', 1],
        ['초코케이크', 2],
      ],
      [
        ['바비큐립', 1],
        ['아이스크림', 4],
      ],
    ];
    const outputs = [2, 4];

    // when
    const menu = new Menu();

    // then
    menuArr.forEach((arr, index) => {
      expect(menu.getDessertQuantityInOrder(arr)).toEqual(outputs[index]);
    });
  });

  test('mainChecker', async () => {
    // given
    const menuNames = ['양송이수프', '바비큐립', '아이스크림', '샴페인'];
    const outputs = [false, true, false, false];

    // when
    const menu = new Menu();

    // then
    menuNames.forEach((value, index) => {
      expect(menu.mainChecker(value)).toEqual(outputs[index]);
    });
  });

  test('isMainInOrder', async () => {
    // given
    const menuArr = [
      [
        ['티본스테이크', 1],
        ['초코케이크', 2],
      ],
      [
        ['양송이수프', 1],
        ['제로콜라', 1],
      ],
    ];
    const outputs = [true, false];

    // when
    const menu = new Menu();

    // then
    menuArr.forEach((arr, index) => {
      expect(menu.isMainInOrder(arr)).toEqual(outputs[index]);
    });
  });

  test('getMainQuantityInOrder', async () => {
    // given
    const menuArr = [
      [
        ['티본스테이크', 1],
        ['초코케이크', 2],
      ],
      [
        ['바비큐립', 3],
        ['아이스크림', 4],
      ],
    ];
    const outputs = [1, 3];

    // when
    const menu = new Menu();

    // then
    menuArr.forEach((arr, index) => {
      expect(menu.getMainQuantityInOrder(arr)).toEqual(outputs[index]);
    });
  });

  test('isItemInMenu', async () => {
    // given
    const menuNames = ['아이스크림', '초코아이스크림'];
    const outputs = [true, false];

    // when
    const menu = new Menu();

    // then
    menuNames.forEach((arr, index) => {
      expect(menu.isItemInMenu(arr)).toEqual(outputs[index]);
    });
  });
});