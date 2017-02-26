import template from './app.html';

export default {
  template,
  controller(ApiService, StateService) {
    let ctrl = this;

    this.state = StateService.getState();
    this.stages = [];
    this.loading = true;
    this.activeStage = null;
    this.done = false;

    this.onNext = () => {
      if(this.state.stage === this.stages.length - 1) {
        this.done = true;
        return;
      }
      StateService.nextStage();
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
