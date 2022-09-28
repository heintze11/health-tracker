const router = require("express").Router();
const { response } = require("express");
const { Appointment, Doctor } = require("../models");
const withAuth = require("../utils/auth");

//NEED TO ADD withAuth
router.get("/", (req, res) => {
  Appointment.findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Appointment.create({
    date: req.body.date,
    time: req.body.time,
    user_id: req.session.user_id,
    doctor_id: req.session.doctor_id,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  Appointment.update(
    {
      date: req.body.date,
      time: req.body.time,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Not found" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Appointment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No appointment found with this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
