const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required:true},
    age: { type: Number, required:true},
    city: {type: String, required:true},
    education: {type: String, required:true},
    gender: {type: String, required:true},
    contact: {type: Number, required: true}
});

module.exports = mongoose.model('user', mySchema);

// name, city, age, education, gender, contact