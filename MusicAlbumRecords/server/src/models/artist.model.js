const mongoose = require('mongoose');

const artist = new mongoose.Schema({
  name: { type: String, required: true }
},{
  versionKey: false,
  timestamps:true
});

module.exports = mongoose.model('artist', artist);