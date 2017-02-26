export default function () {
  let directive = {
    require: 'ngModel',
    link(scope, elm, attrs, ctrl) {
      ctrl.$parsers.push(input => {
        let filtered = input.replace(/(^0|[^\d])/g, '');
        if (filtered != input) {
          ctrl.$setViewValue(filtered);
          ctrl.$render();
        }
        return filtered;
      });
    }
  };

  return directive;
}
