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
    // const newMenu = new Menu();
    const orderMenuArr = InputView.orderMenu.split(',');
    this.formattedMenuArr = orderMenuArr.map((item) => {
      const [menu, num] = item.split('-');
      if (!this.newMenu.findMenuByName(menu.trim())) {
        throw new Error('없어!');
      }
      Console.print(`${menu.trim()} ${num.trim()}개`);
      return [menu, parseInt(num, 10)];
    });
    Console.print(this.formattedMenuArr);
  },

  printTotalPriceBeforeDiscount() {
    Console.print(this.formattedMenuArr);
    Console.print(this.newMenu.getPriceForMenu());
  },
};

// const m = new Menu();
// Console.print(m.);
export default OutputView;
