const express = require('express');
const connect = require ("./configs/db");

const app = express();
app.use(express.json());

app.listen(4321, async () => {
    await connect();
    console.log("Listening on port 4321");
})
