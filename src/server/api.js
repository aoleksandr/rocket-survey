let router = require('express').Router();
let stages = require('./mockData');

router.get('/stages', (req, res) => {
  res.json(stages);
});

module.exports = router;
