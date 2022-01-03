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

// get by id =>

router.get("/:id", async (req,res) => {
    const user = await Student.findById(req.params.id).lean().exec();
    return res.status(201).send({user});
})

// sort by name =>

router.get("/age", async (req,res) => {
    let user = await Student.find().sort({age:1}).lean().exec();
    return res.status(201).send({user});
});

router.get("/name", async (req,res) => {
    let user = await Student.find().sort({name:1}).lean().exec();
    return res.status(201).send({user});
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