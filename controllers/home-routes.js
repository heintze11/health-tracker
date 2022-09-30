const router = require('express').Router();
const { User, Doctor, Appointment, Lab, Prescription } = require('../models/');

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
router.get('/dashboard', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
    
      res.render('login');
    });

// labs


// appointments


//doctors




module.exports = router;