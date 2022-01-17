const express = require("express");
const router = express.Router();
const Album = require("../models/album.model");

router.post("/",async(req,res) => {
    const album = await Album.create(req.body);
    return res.status(201).send({album});
})

router.get("/",async(req,res) => {
    const album = await Album.find().populate({path:"songName", populate:{path:"callArtist"}}).lean().exec();
    return res.status(201).send({album});
})

module.exports = router;