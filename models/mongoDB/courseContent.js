const mongoose = require('mongoose');

const Schema = mongoose.Schema

const CourseContentSchema = new Schema({
    course_id: {
        type: Number,
        required: true,
    },
    lectures: [
        {
            lecture_id: Schema.Types.ObjectId,
            title: String,
            video_url: String,
            duration: Number,
        },
    ],
});

module.exports = mongoose.model('CourseContent', CourseContentSchema);
