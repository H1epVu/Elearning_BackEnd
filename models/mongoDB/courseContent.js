const mongoose = require('mongoose');

const Schema = mongoose.Schema

const LectureSchema = new Schema({
    lecture_id: Schema.Types.ObjectId,
    title: String,
    video_url: String,
});

const SectionSchema = new Schema({
    section_id: Schema.Types.ObjectId,
    title: String,
    lectures: [LectureSchema],
});

const CourseContentSchema = new Schema({
    course_id: {
        type: Number,
        required: true,
    },
    sections: [SectionSchema],
});

module.exports = mongoose.model('CourseContent', CourseContentSchema);
