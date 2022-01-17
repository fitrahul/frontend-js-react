const express = require("express");
const connect = require("./configs/db");
const artistController = require("./controllers/artist.controller");
const songController = require("./controllers/songs.controller");
const albumController = require("./controllers/album.controller");

const app = express();
app.use(express.json());
app.use("/artists",artistController);
app.use("/songs",songController);
app.use("/albums",albumController);

app.listen(8888,async()=> {
    await connect();
    console.log("Listening on port 8888");
})