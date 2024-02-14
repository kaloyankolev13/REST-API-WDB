// Mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    description: String,
    dueDate: Date,
    priority: String,
    completed: Boolean
});

module.exports = mongoose.model('Task', taskSchema);

