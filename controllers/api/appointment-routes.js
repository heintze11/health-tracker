const router = require("express").Router();
const { response } = require("express");
const { Appointments } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', withAuth, (req, res) => {
    Appointments.create({
        date: req.session.date,
        time: req.session.time,

    })
})

module.exports = router;
