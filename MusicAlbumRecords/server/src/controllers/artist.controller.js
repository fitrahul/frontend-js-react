const express = require("express");
const router = express.Router();
const Artist = require("../models/artist.model");

router.post("/",async(req,res) => {
    const artist = await Artist.create(req.body);
    return res.status(201).send({artist});
})

router.get("/",async(req,res) => {
    const artist = await Artist.find().lean().exec();
    return res.status(201).send({artist});
})

// router.delete("/:id",async(req,res) => {
//     const artist = await Artist.findByIdAndDelete(req.params.id).lean().exec();
//     return res.status(201).send({artist});
// })

module.exports = router;