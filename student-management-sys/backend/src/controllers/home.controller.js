var express = require("express");
var router = express.Router();

router.get("/", async (req,res) => {
    return res.status(201).send({data: "home page"});
});

module.exports = router;