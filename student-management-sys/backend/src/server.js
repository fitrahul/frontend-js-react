const express = require('express');
const connect = require ("./configs/db");
const cors = require('cors');

const studentController = require("./controllers/student.controller");
const contestController = require("./controllers/contest.controller");
const adminController = require("./controllers/admin.controller");

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:4321', credentials: true}));

app.use("/students", studentController);
app.use("/contest",contestController);
app.use("/admins",adminController);

app.listen(4321, async () => {
    await connect();
    console.log("Listening on port 4321");
})
