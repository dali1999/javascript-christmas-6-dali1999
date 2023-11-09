import { Console } from '@woowacourse/mission-utils';

class Calender {
  generateDecemberCalendar(year) {
    const calendar = [];

    // 12월의 첫 날부터 마지막 날까지 반복
    for (let day = 1; day <= 31; day++) {
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
}
// const calender = new Calender();
// const december = calender.generateDecemberCalendar(2023);
// Console.print(december);
// december.forEach((dayInfo) => {
//   if (dayInfo.specialEvent) Console.print(dayInfo.day);
// });
export default Calender;
