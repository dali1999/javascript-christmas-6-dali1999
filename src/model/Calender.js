import Menu from './Menu.js';

class Calender {
  constructor() {
    this.menu = new Menu();

    this.specialDate = [];
    this.weekDay = [];
    this.weekendDay = [];
  }

  static #generateDecemberCalendar(year) {
    const calendar = [];
    for (let day = 1; day <= 31; day += 1) {
      const currentDate = new Date(year, 11, day);
      const dayInfo = { day, dayOfWeek: currentDate.getDay() }; // 0:일 1:월 2:화 3:수 4:목 5:금 6:토
      if (day === 25 || dayInfo.dayOfWeek === 0) {
        dayInfo.specialEvent = 'star';
      }
      calendar.push(dayInfo);
    }
    return calendar;
  }

  storeSpecialDate() {
    const december = Calender.#generateDecemberCalendar(2023);
    december.forEach((dayInfo) => {
      if (dayInfo.specialEvent) this.specialDate.push(dayInfo.day);
    });
    return this.specialDate;
  }

  storeWeekday() {
    const december = Calender.#generateDecemberCalendar(2023);
    december.forEach((dayInfo) => {
      if ([0, 1, 2, 3, 4].includes(dayInfo.dayOfWeek))
        this.weekDay.push(dayInfo.day);
    });
    return this.weekDay;
  }

  storeWeekendday() {
    const december = Calender.#generateDecemberCalendar(2023);
    december.forEach((dayInfo) => {
      if ([5, 6].includes(dayInfo.dayOfWeek)) this.weekendDay.push(dayInfo.day);
    });
    return this.weekendDay;
  }
}

export default Calender;
