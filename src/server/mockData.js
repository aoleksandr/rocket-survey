module.exports = [{
  text: 'RocketRoute would like to give you the best product. This survey will take few seconds.',
  questions: [{
    type: 'name',
    field: 'username',
    body: 'My name is ___'
  }, {
    type: 'email',
    field: 'email',
    body: 'I\'m using ___ email'
  }, {
    type: 'phone',
    field: 'phoneNumber',
    body: 'And my phone number is ___'
  }]
}, {
  text: 'We need your address to confirm our best offer',
  questions: [{
    type: 'country',
    field: 'addressCountry',
    body: 'I live in ___'
  }, {
    type: 'zip',
    field: 'addressZip',
    body: 'My zip code is ___'
  }]
}, {
  text: 'These answers provides deeper insights to craft something special',
  questions: [{
    type: 'money',
    field: 'familyIncome',
    body: 'My family makes ___ per year'
  }, {
    type: 'family',
    field: 'familySize',
    body: 'There is ___ person in my tax household'
  }]
}];
