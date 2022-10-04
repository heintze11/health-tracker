const router = require("express").Router();
const { response } = require("express");
const { Lab } = require("../../models");
const withAuth = require("../../utils/auth");

//NEED TO ADD withAuth
router.get("/", withAuth, (req, res) => {
    Lab.findAll()
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post("/", withAuth, (req, res) => {
    Lab.create({
      name: req.body.name,
      content: req.body.content,
      range: req.body.range,
      user_id: req.session.user_id,
      doctor_id: req.body.doctor_id,
    })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.put("/:id", withAuth, (req, res) => {
    Lab.update(
      {
        name: req.body.name,
        content: req.body.content,
        range: req.body.range,
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

  router.delete("/:id", withAuth, (req, res) => {
    Lab.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        if (!data) {
          res.status(404).json({ message: "No labs found" });
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