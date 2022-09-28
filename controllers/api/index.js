const router = require('express').Router();
const Appointment = require('./appointment-routes');
const Doctor = require('./doctor-routes');
const Lab = require('./lab-routes');
const Prescription = require('./prescription-routes');
const login = require('./login');
const logout = require('./logout');


router.use('/appointment', Appointment);
router.use('/doctor', Doctor);
router.use('/lab', Lab);
router.use('/prescription', Prescription);
router.use('/login', login);
router.use('/logout', logout);


module.exports = router; 