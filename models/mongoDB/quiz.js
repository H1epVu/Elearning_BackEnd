const mongoose = require('mongoose');

const Schema = mongoose.Schema

const QuizSchema = new Schema({
    course_id: {
        type: Number,
        required: true,
    },
    questions: [
        {
            question_id: Schema.Types.ObjectId,
            question_text: String,
            options: [String],
            correct_option: String,
        },
    ],
});

module.exports = mongoose.model('Quiz', QuizSchema);