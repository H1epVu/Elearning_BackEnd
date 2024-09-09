const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ChatMessageSchema = new Schema({
    sender_id: {
        type: Number,
        required: true,
    },
    receiver_id: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    sent_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
