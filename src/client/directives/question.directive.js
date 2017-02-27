import angular from 'angular';

export default function ($compile) {
  let directive = {
    restrict: 'E',
    scope: {
      data: '<',
      value: '='
    },
    controller($scope, $element) {
      let generatedElement = angular.element(generateTemplate($scope.data));
      $element.append(generatedElement);
      $compile(generatedElement)($scope);
    }
  };

  function generateTemplate(question) {
    let directiveName = `<custom-input type="${question.type}" value="value" />`;
    return `<span>${question.body.replace('___', directiveName)}</span>`;
  }

  return directive;
}
