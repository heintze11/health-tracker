const router = require("express").Router();
const { response } = require("express");
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

//login create
router.post("/signup", async (req, res) => {
  console.log("HEllo")
  console.log(req.body);
  try {
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.firstName;
      req.session.lastName = newUser.lastName;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch(err) {
      console.log(err);
      res.status(400).json(err);
    }
});

//Login check
router.post('/', async (req, res) => {
 
try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.firstName = userData.firstName;
      req.session.lastName = userData.lastName;
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//logout
router.post('/logout', (req, res) => {
  console.log("here")
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
        // Does this automatically
        //res.render to go back to homepage after logout
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router;
