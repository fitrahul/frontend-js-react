const express = require("express");
const router = express.Router();

var Student = require("../models/student.model");

router.post("", async (req, res) => {
    try {
        const user = await Student.create(req.body);
        console.log(user);
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

router.delete("/:id", async (req,res) => {
    const user = await Student.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(201).send({user});
})

router.patch("/:id", async (req,res) => {
    const user = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    return res.status(201).send({user});
})


module.exports = router;