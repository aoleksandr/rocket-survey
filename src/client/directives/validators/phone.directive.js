export default function () {
  let directive = {
    require: 'ngModel',
    link(scope, elm, attrs, ctrl) {

      ctrl.$parsers.push(input => {
        // phone format: (000) 000-0000
        let phoneFillers = {
          '0': '(',
          '3': ') ',
          '6': '-'
        };
        let phoneNumber = input.replace(/[^\d]/g, '').substring(0, 10);
        let formatted = '';

        for (let i = 0; i < phoneNumber.length; i++) {
          formatted += (phoneFillers[i] || '') + phoneNumber[i];
        }
        ctrl.$setViewValue(formatted);
        ctrl.$render();

        return formatted;
      });

      ctrl.$validators.phone = function (modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }
        
        return viewValue.length === 14;
      };
    }
  };

  return directive;
}
