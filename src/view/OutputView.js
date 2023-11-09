import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Menu from '../model/Menu.js';

const OutputView = {
  formattedMenuArr: [],
  newMenu: new Menu(),

  printOpening() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },
};

// const m = new Menu();
// Console.print(m.);
export default OutputView;
