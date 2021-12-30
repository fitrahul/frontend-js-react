const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb://localhost/stu_man_system");
}