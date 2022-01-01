var express = require("express");
var router = express.Router();

var Contest = require("../models/contest.model");

router.post("", async (req,res) => {
    let contest = await Contest.create(req.body);
    return res.status(201).send({contest});
});

router.get("", async (req,res) => {
    let contest = await Contest.find().lean().exec();
    return res.status(201).send({contest});
});

router.get("/dsa", async (req,res) => {
    let contest = await Contest.find({"type" : "DSA"}).lean().exec();
    return res.status(201).send({contest});
});

router.get("/coading", async (req,res) => {
    let contest = await Contest.find({"type" : "Coading"}).lean().exec();
    return res.status(201).send({contest});
});

module.exports = router;