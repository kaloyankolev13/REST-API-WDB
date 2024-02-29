const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Project', projectSchema);