const router = require('express').Router();
const api = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/api', api);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;