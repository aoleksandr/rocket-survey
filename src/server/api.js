let router = require('express').Router();

let stages = [{
  text: '',
  questions: [{
    type: 'name',
    body: 'My name is ___'
  }, {
    type: 'email',
    body: 'I\'m using ___ email'
  }]
}];

router.get('/stages', (req, res) => {
  res.json(stages);
});



module.exports = router;
