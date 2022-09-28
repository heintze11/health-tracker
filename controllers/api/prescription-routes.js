const router = require("express").Router();
const { response } = require("express");
const { Prescription } = require("../../models");
const withAuth = require("../../utils/auth");

//NEED TO ADD withAuth
router.get("/", (req, res) => {
  Prescription.findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Prescription.create({
    name: req.body.name,
    dose: req.body.dose,
    frequency: req.body.frequency,
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
    Prescription.update(
      {
        name: req.body.name,
        dose: req.body.dose,
        frequency: req.body.frequency,
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
    Prescription.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No prescription found" });
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
