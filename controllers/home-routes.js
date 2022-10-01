const router = require('express').Router();
const { User, Doctor, Appointment, Lab, Prescription } = require('../models/');
const withAuth = require("../utils/auth");

//welcome homepage
router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

// login page
router.get('/api/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

// dashboard page
router.get('/dashboard', withAuth, async (req, res) => {
    console.log(req.session);
    if (req.session.logged_in) {
        res.render('dashboard', req.session);
        return;
      }
    
      res.render('login');
    });

// labs
router.get('/lab', withAuth, async (req, res) => {
    try {
      const labData = await Lab.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      const lab = labData.map((lab) => lab.get({ plain: true }));
  
      res.render('labs', {
        layout: 'main',
        lab,
      });
    } catch (err) {
      res.redirect('/dashboard');
    }
  });

// appointments
router.get('/appointment', withAuth, async (req, res) => {
    try {
      const appointmentData = await Appointment.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      const appointment = appointmentData.map((appoint) => appoint.get({ plain: true }));
  
      res.render('appointment', {
        layout: 'main',
        appointment,
      });
    } catch (err) {
      res.redirect('/dashboard');
    }
  });

//doctors
router.get('/doctor', withAuth, async (req, res) => {
    try {
      const doctorData = await Doctor.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      const doctor = doctorData.map((doc) => doc.get({ plain: true }));
  
      res.render('doctor', {
        layout: 'main',
        doctor,
      });
    } catch (err) {
      res.redirect('/dashboard');
    }
  });

//prescriptions
router.get('/prescription', withAuth, async (req, res) => {
    try {
      const prescriptionData = await Prescription.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      const prescription = prescriptionData.map((pres) => pres.get({ plain: true }));
  
      res.render('prescriptions', {
        layout: 'main',
        prescription,
      });
    } catch (err) {
      res.redirect('/dashboard');
    }
  });




module.exports = router;