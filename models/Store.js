const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const StoreSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [15, 'Title must be less than 15 chars']
  },
  body: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});


module.exports = mongoose.model('Store', StoreSchema);
