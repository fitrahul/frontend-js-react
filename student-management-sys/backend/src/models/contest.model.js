const mongoose = require ("mongoose");

const Contest = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    deadline: { type: String, required: true },
    tag: { type: String, required: true },
    time: { type: String, required: true }
},{
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("contest", Contest);

// title:React/Redux/Js/HTML/CSS, 
// type ( DSA or Coding ), 
// deadline:15 jan 2022, 
// tag:new/Time Out, 
// time:11:59pm