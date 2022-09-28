const router = require('express').Router();
const Appointment = require('./appointment-routes.js');

router.use('/', Appointment);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;