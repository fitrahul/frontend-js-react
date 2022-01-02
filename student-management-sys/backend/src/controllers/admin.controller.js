const express = require("express");
const router = express.Router();

var Admin = require("../models/admin.model");

router.post("", async (req, res) => {
    var admin = await Admin.create(req.body);
    return res.status(201).send({ admin });
});

router.get("", async (req, res) => {
    var admin = await Admin.find().lean().exec();
    return res.status(201).send({ admin });
});

// checking the user from coming input with existing user =>
router.post("/check", async (req, res) => {
        var admin = await Admin.findOne({username: req.body.username}).lean().exec();
        var pas = await Admin.findOne({password: req.body.password}).lean().exec();
        console.log(admin,pas);
        if (admin !== null && pas !== null) {
            return res.status(201).send({ admin });
        }
        else {
            return res.send(null);
        }
});

module.exports = router;