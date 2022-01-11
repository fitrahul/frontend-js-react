const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://rahulkumar:rahulkumar@cluster0.ctsd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}