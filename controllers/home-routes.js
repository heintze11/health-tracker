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
router.get('/dashboard', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
    
      res.render('login');
    });

// labs
router.get('/', withAuth, async (req, res) => {
    try {
      const labData = await Lab.findAll({
        where: {
          userId: req.session.userId,
        },
      });
  
      const labs = labData.map((lab) => lab.get({ plain: true }));
  
      res.render('labs', {
        layout: 'main',
        labs,
      });
    } catch (err) {
      res.redirect('login');
    }
  });

// appointments


//doctors




module.exports = router;