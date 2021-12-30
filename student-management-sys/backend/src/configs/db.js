const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb://localhost/student_mang_sys");
}