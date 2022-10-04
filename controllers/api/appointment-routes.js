const router = require("express").Router();
const { response } = require("express");
const { Appointment, Doctor } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
  Appointment.findAll()
  .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.get("/calendar", withAuth, async (req, res) => {
    try {
      const appointmentData = await Appointment.findAll({
        where: {
          user_id: req.session.user_id,
        },
        include: [
          Doctor
        ]
      });
      console.log("here")
      const doctorData = await Doctor.findAll();
      const doctor = doctorData.map((doc) => doc.get({ plain: true }));
      const appointment = appointmentData.map((appoint) => appoint.get({ plain: true }));
      res.json( {
        appointment,
        doctor
      });
    } catch (err) {
      res.redirect('/dashboard');
    }
  });
 

router.post("/", withAuth, (req, res) => {
  console.log(req.body);
  Appointment.create({
    date: req.body.date,
    time: req.body.time,
    user_id: req.session.user_id,
    doctor_id: req.body.doctor_id,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put("/:id", (req, res) => {
  Appointment.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
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

router.delete("/:id", withAuth, (req, res) => {
  Appointment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No appointment found" });
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
