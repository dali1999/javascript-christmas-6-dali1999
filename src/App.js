import EventController from './controller/EventController.js';

class App {
  constructor() {
    this.controller = new EventController();
    this.visitDate = 0;
    this.orderMenu = [];
  }

  async run() {
    await EventController.startPlannerAndGetInput();
    EventController.plannerDetails();
  }
}

export default App;
