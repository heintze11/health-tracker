const router = require("express").Router();
const sequelize = require("../config/connection");
const { Appointment, Doctor, Lab, Prescription } = require("../models");
const withAuth = require("../utils/auth");

// GET all on homepage
router.get("/", withAuth, (req, res) => {
  Appointment.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: ["id", "date", "time"],
    include: [
      {
        model: Doctor,
        attributes: ["name", "specialty"],
      },
      {
        model: Lab,
        attributes: ["name"],
      },
      {
        model: Prescription,
        attributes: ["name"],
      },
    ],
  })
    .then((data) => {
      const posts = data.map((post) => post.get({ plain: true }));
      res.render("dashboard", {
        posts,
        loggedIn: true,
        username: req.session.username,
      });
    })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
