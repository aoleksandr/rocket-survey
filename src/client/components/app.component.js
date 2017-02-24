export default {
  template: '<h1>Angular Works</h1>',
  controller(ApiService) {
    ApiService.fetchStages().then(data => {
      console.log(data);
    }, err => {
      console.error(err);
    });
  }
};