import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Menu from '../model/Menu.js';

const OutputView = {
  formattedMenuArr: [],
  newMenu: new Menu(),

  printOpening() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printBenefitOpening() {
    const date = InputView.visitDate;
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
  },

  printOrderMenu() {
    Console.print('<주문 메뉴>');
    const orderMenuArr = InputView.orderMenu.split(',');
    this.formattedMenuArr = orderMenuArr.map((item) => {
      const [menu, num] = item.split('-');

      if (!this.newMenu.findMenuByName(menu.trim())) {
        throw new Error('[ERROR] 메뉴에 없습니다');
      }

      Console.print(`${menu.trim()} ${num.trim()}개`);
      return [menu.trim(), parseInt(num.trim(), 10)];
    });
    // Console.print(orderMenuArr); // ['a-2', 'b-3']
    // Console.print(this.formattedMenuArr); // [ ['a', 2],['b', 3] ]
  },
};

// const m = new Menu();
// Console.print(m.);
export default OutputView;
