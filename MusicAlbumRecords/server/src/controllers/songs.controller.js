const express = require("express");
const router = express.Router();
const Song = require("../models/songs.model");

router.post("/",async(req,res) => {
    const song = await Song.create(req.body);
    return res.status(201).send({song});
})

router.get("/",async(req,res) => {
    const song = await Song.find().lean().exec();
    return res.status(201).send({song});
})

// router.delete("/:id",async(req,res) => {
//     const song = await Song.find().lean().exec();
//     return res.status(201).send({song});
// })

module.exports = router;