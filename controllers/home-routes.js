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
        res.render('dashboard');
        return;
      }
    
      res.render('login');
    });

// labs
router.get('/lab', withAuth, async (req, res) => {
    console.log(req.session);
    console.log("Are we here?");
    try {
      const labData = await Lab.findAll({
        where: {
          user_id: req.session.user_id,
        },
      });
  
      const labs = labData.map((lab) => lab.get({ plain: true }));
  
      res.render('labs', {
        layout: 'main',
        labs,
      });
    } catch (err) {
      res.redirect('/dashboard');
    }
  });

// appointments
// router.get('/appointment', withAuth, async (req, res) => {
//     try {
//       const appointmentData = await appointmentData.findAll({
//         where: {
//           user_id: req.session.user_id,
//         },
//       });
  
//       const labs = labData.map((lab) => lab.get({ plain: true }));
  
//       res.render('labs', {
//         layout: 'main',
//         labs,
//       });
//     } catch (err) {
//       res.redirect('/dashboard');
//     }
//   });

//doctors


//prescriptions





module.exports = router;