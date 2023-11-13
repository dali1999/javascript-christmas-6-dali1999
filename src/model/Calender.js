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
    const { FIRST_DAY_OF_MONTH, LAST_DAY_OF_MONTH, DECEMBER_INDEX, CHRISTMAS_DAY, DAYS, SPECIALEVENT_MARKER } =
      CalenderConstants;
    const calendar = [];
    for (let day = FIRST_DAY_OF_MONTH; day <= LAST_DAY_OF_MONTH; day += 1) {
      const currentDate = new Date(year, DECEMBER_INDEX, day);
      const dayInfo = { day, dayOfWeek: currentDate.getDay() };
      if (day === CHRISTMAS_DAY || dayInfo.dayOfWeek === DAYS.SUN) {
        dayInfo.specialEvent = SPECIALEVENT_MARKER;
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
      if (weekends.includes(dayInfo.dayOfWeek)) this.weekendDay.push(dayInfo.day);
    });
    return this.weekendDay;
  }
}

export default Calender;
