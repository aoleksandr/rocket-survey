export default function () {
  let directive = {
    require: 'ngModel',
    link(scope, elm, attrs, ctrl) {
      ctrl.$validators.phone = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }
        //todo: add a formatter here
        return !!(/^123$/.test(viewValue));
      };
    }
  };

  return directive;
}
