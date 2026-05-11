const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        trim: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const TodoModel = mongoose.model('Todo', todoSchema);
module.exports = TodoModel;