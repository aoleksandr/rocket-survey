import template from './question.html';

export default function($compile) {
  let directive = {
    restrict: 'E',
    scope: {
      data: '='
    },
    controller($scope, $element) {
      let generatedTpl = $compile(generateTemplate($scope.data))($scope);
      $element.prepend(generatedTpl);
    },
    template
  };

  function generateTemplate(question) {
    let directiveName = `${question.type}-input`;
    return `<p>${question.body.replace('___', `<${directiveName} />`)}</p>`;
  }

  return directive;
}