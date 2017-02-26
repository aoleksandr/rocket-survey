import template from './questions-list.html';

export default {
  template,
  bindings: {
    questions: '<',
    onNext: '&'
  },
  controller($scope, StateService) {
    this.$onChanges = () => {
      this.payload = {};
      this.questions.map(question => {
        this.payload[question.field] = null;
      });
    };

    this.state = StateService.getState();

    $scope.$watch('$ctrl.questionsForm.$valid', (newVal) => {
      if(this.questionsForm.$dirty && newVal) {
        StateService.nextQuestion();
      }
    });

    this.onNextClick = () => {
      this.questionsForm.$setPristine();
      this.onNext();
    };
  }
};