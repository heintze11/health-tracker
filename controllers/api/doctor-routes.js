const router = require("express").Router();
const { response } = require("express");
const { Doctor } = require("../../models");
const withAuth = require("../../utils/auth");

//NEED TO ADD withAuth
router.get("/", (req, res) => {
  Doctor.findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Doctor.create({
    name: req.body.name,
    specialty: req.body.specialty,
    address: req.body.address,
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
    Doctor.update(
      {
        name: req.body.name,
        specialty: req.body.specialty,
        address: req.body.address,
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
    Doctor.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No doctor found" });
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
