const mongoose = require('mongoose');

const Schema = mongoose.Schema

const CourseAnalyticsSchema = new Schema({
    course_id: {
        type: Number,
        required: true,
    },
    total_views: {
        type: Number,
        default: 0,
    },
    total_watch_time: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('CourseAnalytics', CourseAnalyticsSchema);
