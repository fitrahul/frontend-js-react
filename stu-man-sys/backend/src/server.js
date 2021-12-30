const express = require('express');
const connect = require("./configs/db")

const app = express();


app.listen(4320, async () => {
    await connect();
    console.log("Listening on port 4320");
})