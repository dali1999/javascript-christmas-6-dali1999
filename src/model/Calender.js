import { Console } from '@woowacourse/mission-utils';
import OutputView from '../view/OutputView.js';
import Menu from './Menu.js';

class Calender {
  constructor() {
    this.menu = new Menu();
    this.specialDate = [];
    this.weekDay = [];
    this.weekendDay = [];
  }

  static generateDecemberCalendar(year) {
    const calendar = [];

    // 12월의 첫 날부터 마지막 날까지 반복
    for (let day = 1; day <= 31; day += 1) {
      const currentDate = new Date(year, 11, day);
      // 현재 날짜가 12월이 아니라면 반복 중지
      if (currentDate.getMonth() !== 11) {
        break;
      }
      // 날짜와 요일 정보를 포함하는 객체 생성
      const dayInfo = {
        day,
        dayOfWeek: currentDate.getDay(), // 0은 일요일, 1은 월요일, ...,5은 금요일, 6은 토요일
      };
      // 25일과 일요일에 'star' 추가
      if (day === 25 || dayInfo.dayOfWeek === 0) {
        dayInfo.specialEvent = 'star';
      }
      // 달력에 날짜 정보 추가
      calendar.push(dayInfo);
    }
    return calendar;
  }

  // 별 있는 날짜 저장하는 배열 [ 3, 10, 17, 24, 25, 31 ]
  storeSpecialDate() {
    const december = Calender.generateDecemberCalendar(2023);
    december.forEach((dayInfo) => {
      if (dayInfo.specialEvent) this.specialDate.push(dayInfo.day);
    });
    return this.specialDate;
  }


}
const calender = new Calender();

// const december = Calender.generateDecemberCalendar(2023);
// Console.print(calender.storeSpecialDate());
// Console.print(calender.storeWeekday());
// Console.print(calender.storeWeekendday());

export default Calender;
