import EventController from './controller/EventController.js';

class App {
  constructor() {
    this.controller = new EventController();
    this.visitDate = 0;
    this.orderMenu = [];
  }

  async run() {
    await this.controller.startPlannerAndGetInput();
    this.controller.plannerDetails();
  }
}

export default App;
