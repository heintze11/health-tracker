const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// Routes

//GET all
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


  //POST new user
  router.post('/', (req, res) => {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
      .then(data => {
        req.session.save(() => {
          req.session.user_id = data.id;
          req.session.firstName = data.firstName;
          req.session.lastName = data.lastName;
          req.session.loggedIn = true;
    
          res.json(data);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // POST login route for user
router.post('/login', (req, res) => {
    User.findOne({
        where: {
        email: req.body.email
        }
    }).then(data => {
        if (!data) {
        res.status(400).json({ message: 'No user found with entered email address' });
        return;
        }
        const validPassword = data.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
          res.json({ user: data, message: 'Success!' });
    });  
});

// POST log out an existing user
router.post('/logout', withAuth, (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


  module.exports = router;