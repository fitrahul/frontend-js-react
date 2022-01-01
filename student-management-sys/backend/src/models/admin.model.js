const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("admin", Admin);