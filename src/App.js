import EventController from './controller/EventController.js';

class App {
  constructor() {
    this.controller = new EventController();
  }

  async run() {
    await this.controller.startPlannerAndGetInput();
    this.controller.setDatas();
    this.controller.orderDetails();
    this.controller.benefitsDetails();
  }
}

export default App;
