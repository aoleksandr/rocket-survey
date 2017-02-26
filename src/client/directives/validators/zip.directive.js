export default function () {
  let directive = {
    require: 'ngModel',
    link(scope, elm, attrs, ctrl) {
      ctrl.$validators.zip = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }
        return !!(/^\d{5}$/.test(viewValue));
      };
    }
  };

  return directive;
}