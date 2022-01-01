const express = require("express");
const router = express.Router();

var Admin = require("../models/admin.model");

router.post("", async (req,res) => {
    var admin = await Admin.create(req.body);
    return res.status(201).send({admin});
});

router.get("", async (req,res) => {
    var admin = await Admin.find().lean().exec();
    return res.status(201).send({admin});
});

module.exports = router;