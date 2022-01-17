const mongoose = require('mongoose');

const album = new mongoose.Schema({
  image: { type: String, required: true },
  songName: [{ type: mongoose.Schema.Types.ObjectId, ref: "songs", required: true }],
  year: { type: Number, required: true }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = mongoose.model('album', album);