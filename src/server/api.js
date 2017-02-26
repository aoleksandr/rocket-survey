let router = require('express').Router();
let stages = require('./mockData').stages;
let countries = require('./mockData').countries;

router.get('/stages', (req, res) => {
  res.json(stages);
});

router.get('/countries', (req, res) => {
  res.json(countries);
})

router.get('*', function (req, res) {
    res.status(404).send('Not found');
});

module.exports = router;
