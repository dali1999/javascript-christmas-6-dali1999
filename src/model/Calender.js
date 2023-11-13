import Menu from './Menu.js';
import CalenderConstants from '../constant/CalenderConstants.js';

class Calender {
  constructor() {
    this.menu = new Menu();

    this.specialDate = [];
    this.weekDay = [];
    this.weekendDay = [];
  }

  static #generateDecemberCalendar(year) {
    const calendar = [];
    for (
      let day = CalenderConstants.FIRST_DAY_OF_MONTH;
      day <= CalenderConstants.LAST_DAY_OF_MONTH;
      day += 1
    ) {
      const currentDate = new Date(year, CalenderConstants.DECEMBER_INDEX, day);
      const dayInfo = { day, dayOfWeek: currentDate.getDay() };
      if (
        day === CalenderConstants.CHRISTMAS_DAY ||
        dayInfo.dayOfWeek === CalenderConstants.DAYS.SUN
      ) {
        dayInfo.specialEvent = CalenderConstants.SPECIALEVENT_MARKER;
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
    const weekdays = [
      CalenderConstants.DAYS.SUN,
      CalenderConstants.DAYS.MON,
      CalenderConstants.DAYS.TUE,
      CalenderConstants.DAYS.WED,
      CalenderConstants.DAYS.THU,
    ];
    december.forEach((dayInfo) => {
      if (weekdays.includes(dayInfo.dayOfWeek)) this.weekDay.push(dayInfo.day);
    });
    return this.weekDay;
  }

  storeWeekendday() {
    const december = Calender.#generateDecemberCalendar(2023);
    const weekends = [CalenderConstants.DAYS.FRI, CalenderConstants.DAYS.SAT];
    december.forEach((dayInfo) => {
      if (weekends.includes(dayInfo.dayOfWeek))
        this.weekendDay.push(dayInfo.day);
    });
    return this.weekendDay;
  }
}

export default Calender;
