const router = require('express').Router();
const api = require('./api');

router.use('/api', api);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;