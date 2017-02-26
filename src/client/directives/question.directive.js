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
    let directiveName = `<${question.type}-input value="value" />`;
    return `<p>${question.body.replace('___', directiveName)}</p>`;
  }

  return directive;
}
