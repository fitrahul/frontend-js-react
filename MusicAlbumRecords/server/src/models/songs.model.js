const mongoose = require('mongoose');

const song = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: String, required: true },
  genre: { type: String, required: true },
  callArtist: { type: mongoose.Schema.Types.ObjectId, ref: "artist", required: true }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('songs', song);