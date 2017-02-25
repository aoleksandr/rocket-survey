import template from './app.html';

export default {
  template,
  controller(ApiService) {
    let ctrl = this;
    this.state = {
      stage: 0,
      question: 0
    };
    this.stages = {};
    this.loading = true;
    this.activeStage = null;

    this.onNextClick = function () {
      ctrl.state.stage += 1;
      ctrl.activeStage = this.stages[ctrl.state.stage];
    };

    ApiService.fetchStages().then(data => {
      this.stages = data;
      this.activeStage = this.stages[0];
      this.loading = false;
    }, err => {
      console.error(err);
    });
  }
};
