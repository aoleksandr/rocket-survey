import countryTemplate from './templates/country-input.html';
import emailTemplate from './templates/email-input.html';
import nameTemplate from './templates/name-input.html';
import phoneTemplate from './templates/phone-input.html';
import zipTemplate from './templates/zip-input.html';
import familyTemplate from './templates/family-input.html';
import moneyTemplate from './templates/money-input.html';

let templates = {
  countryTemplate,
  emailTemplate,
  nameTemplate,
  phoneTemplate,
  zipTemplate,
  familyTemplate,
  moneyTemplate
};


export default function () {
  let directive = {
    restrict: 'E',
    scope: {},
    bindToController: {
      value: '=',
      type: '@'
    },
    controllerAs: '$ctrl',

    controller(ApiService) {
      this.$onInit = () => {
        if (this.type === 'country') {
          ApiService.getCountries().then(countries => {
            this.countries = countries;
          });
        }
      };
    },
    template: function (elm, attr) {
      return templates[`${attr.type}Template`];
    }
  };

  return directive;
}
