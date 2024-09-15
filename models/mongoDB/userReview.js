const mongoose = require('mongoose');

const Schema = mongoose.Schema

const userReviewSchema = new Schema({
    user_id: Number,
    course_id: Number,
    rating: Number,
    review_text: String,
    created_at: { type: Date, default: Date.now }
});

const UserReview = mongoose.model('UserReview', userReviewSchema);
module.exports = UserReview;
