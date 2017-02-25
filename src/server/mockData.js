module.exports = [{
  text: 'RocketRoute would like to give you the best product. This survey will take few seconds.',
  questions: [{
    type: 'name',
    body: 'My name is ___'
  }, {
    type: 'email',
    body: 'I\'m using ___ email'
  }, {
    type: 'phone',
    body: 'And my phone number is ___'
  }]
}, {
  text: 'We need your address to confirm our best offer',
  questions: [{
    type: 'country',
    body: 'I live in ___'
  }, {
    type: 'zip',
    body: 'My zip code is ___'
  }]
}, {
  text: 'These answers provides deeper insights to craft something special',
  questions: [{
    type: 'country',
    body: 'My family makes ___ per year'
  }, {
    type: 'family',
    body: 'There is ___ person in my tax household'
  }]
}];
