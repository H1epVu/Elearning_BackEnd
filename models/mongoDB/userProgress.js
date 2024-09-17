const mongoose = require('mongoose');

const Schema = mongoose.Schema

const progressSchema = new Schema({
    lesson_id: Number,
    watched_duration: String,
    completed: Boolean
});

const userProgressSchema = new Schema({
    user_id: Number,
    course_id: Number,
    progress: [progressSchema]
});

const UserProgress = mongoose.model('UserProgress', userProgressSchema);
module.exports = UserProgress;