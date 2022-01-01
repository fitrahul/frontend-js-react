const express = require("express");
const router = express.Router();

var Student = require("../models/student.model");

router.post("", async (req, res) => {
    try {
        const user = await Student.create(req.body);
        return res.status(201).send({ user });
    } catch (err) {
        return res.status(400).send("Something went wrong");
    }
});

router.get("", async (req,res) => {
    try {
        const user = await Student.find().lean().exec();
        return res.status(201).send({user});
    }
    catch (err) {
        return res.status(400).send("Something went wrong");
    }
});


module.exports = router;