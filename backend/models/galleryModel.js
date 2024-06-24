const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
