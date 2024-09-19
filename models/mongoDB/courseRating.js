const mongoose = require('mongoose');

const Schema = mongoose.Schema

const CourseRatingSchema = new Schema({
    course_id: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    review: String,
    created_at: {
      type: Date,
      default: Date.now,
    },
  });
  
  module.exports = mongoose.model('CourseRating', CourseRatingSchema);