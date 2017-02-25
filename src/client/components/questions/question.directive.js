import angular from 'angular';

export default function($compile) {
  let directive = {
    restrict: 'E',
    scope: {
      data: '='
    },
    controller($scope, $element) {
      let generatedElement = angular.element(generateTemplate($scope.data));
      $element.replaceWith(generatedElement);
      $compile(generatedElement)($scope);
    }
  };

  function generateTemplate(question) {
    let directiveName = `<${question.type}-input />`;
    return `<p>${question.body.replace('___', directiveName)}</p>`;
  }

  return directive;
}