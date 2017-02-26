import template from './country-input.html';

export default {
  bindings: {
    value: '='
  },
  controller(ApiService) {
      ApiService.getCountries().then(countries => {
          this.countries = countries;
      });
  },
  template
};